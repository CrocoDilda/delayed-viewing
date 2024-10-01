// Этот файл содержит общие для всего проекта функции, которые будут использоваться на нескольких страницах

import { useMoviesStore } from "@/stores/films-list"
import { useTabindex } from "@/stores/tabindex"
import { useToastStore } from "@/stores/toast-data"

import type { UserMovieType } from "@/types/types"

const address = `https://73509f220638bf50.mokky.dev`
type Movie = Record<string, string>

// функция для роутинга
function goToRoutesPage(router: any, views: string, isReplace?: boolean) {
  if (isReplace) {
    router.replace(views)
  } else {
    router.push(views)
  }
}

function toastSuccess(name: string, message: string) {
  const toastStore = useToastStore()
  toastStore.filmName = name
  toastStore.message = message
  toastStore.callToast()
}

function toastError(name: string, errorMessage: string) {
  const toastStore = useToastStore()
  toastStore.filmName = name
  toastStore.errorMessage = errorMessage
  toastStore.toastSuccess = false
  toastStore.callToast()
}

// функция для получения данных
async function getData(path: string): Promise<Movie[]> {
  try {
    const url = `${address}/${path}`
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    if (!response.ok) {
      throw new Error("Network response was not ok")
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Ошибка при получении данных:", error)
    toastError("", "Server error. Try again later.")
    throw error
  }
}

// функция для отправки данных (в obj передаётся объект, который идёт на сервер)
async function postData(path: string, obj: UserMovieType) {
  try {
    const res = await fetch(`${address}/${path}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    }).then((resp) => resp.json())
    console.log(obj)
    console.log(res)
    if (res.statusCode === 500) {
      toastError(obj.name, "not added. Server error. Try again later.")
    } else {
      toastSuccess(obj.name, "added to list!")
    }
  } catch (error) {
    console.error("Ошибка при отправке данных:", error)
  }
}

async function deleteMovie(path: string, id: number, fnFilmName: string) {
  const toastStore = useToastStore()
  try {
    await fetch(`${address}/${path}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    toastSuccess(fnFilmName, "was removed")
  } catch (error) {
    console.error("Ошибка при удалении данных:", error)
    toastError(fnFilmName, "not removed")
  }
}

async function updateMovies() {
  try {
    const newMoviesList = await getData(
      `movies?userName=${localStorage.getItem("userName")}`
    ) // Вызов импортированной функции

    // Получаем экземпляр хранилища
    const moviesStore = useMoviesStore()
    // Обновляем состояние в хранилище
    console.log(newMoviesList)
    await moviesStore.$patch({
      movies: newMoviesList,
    })

    console.log(moviesStore.movies)
  } catch (error) {
    console.error("Failed to fetch movies:", error)
  }
}

// функция для изменения tabindex
function changeTabindex(value: number) {
  const tabindex = useTabindex()
  tabindex.tabindexVar = value
}

export {
  goToRoutesPage,
  getData,
  postData,
  deleteMovie,
  updateMovies,
  changeTabindex,
  address,
}
