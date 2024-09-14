// Этот файл содержит общие для всего проекта функции, которые будут использоваться на нескольких страницах

const address = `https://73509f220638bf50.mokky.dev`

// функция для роутинга
function goToRoutesPage(router: any, views: string, isReplace?: boolean) {
  if (isReplace) {
    router.replace(views)
  } else {
    router.push(views)
  }
}

// функция для получения данных
async function getData(resource: string, path?: string) {
  try {
    const url = `${address}/${resource}` + (path ? `?${path}` : "")
    const response = await fetch(`${url}`)
    if (!response.ok) {
      throw new Error("Network response was not ok")
    }
    return await response.json()
  } catch (error) {
    console.error("Ошибка при получении данных:", error)
    throw error // Перебрасываем ошибку, чтобы её можно было обработать выше по стеку
  }
}

// функция для отправки данных (в obj передаётся объект, который идёт на сервер)
async function postData(path: string, obj: Record<string, string>) {
  try {
    const response = await fetch(`${address}/${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
    console.log(response)
  } catch (error) {
    console.error("Ошибка при отправке данных:", error)
  }
}

export { goToRoutesPage, getData, postData, address }
