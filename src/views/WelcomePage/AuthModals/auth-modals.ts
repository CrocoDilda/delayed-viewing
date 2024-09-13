import { ref } from "vue"

import { goToRoutesPage, getData, postData } from "@/utils/utils"

type ObjectNum = Record<string, number>
type ObjectStr = Record<string, string>

const errorsValidate = ref<ObjectStr>({
  name: "",
  pass: "",
  form: "",
})
const validateSampleMin: ObjectNum = {
  name: 2,
  pass: 6,
  passRepeat: 6,
}

let routerInstance: any = null

function passingRouterVariable(router: any) {
  // функция для передачи переменной роутера
  routerInstance = router
}

function successfulAuthorization(name: string) {
  localStorage.setItem("userName", name)
  goToRoutesPage(routerInstance, "/home", true)
}

function successfulRegistration(path: string, obj: Record<string, string>) {
  const postObj = {
    name: obj.name,
    password: obj.pass,
    movie_id: obj.name,
  }
  postData(path, postObj)
  successfulAuthorization(obj.name)
}

function validateInput(
  valueValidate: string,
  minLength: number,
  maxLength: number
): string | null {
  // функция валидации инпута, которая возращает текст ошибки или null, если всё хорошо
  if (valueValidate.length < minLength)
    return `Must be at least ${minLength} characters`
  if (valueValidate.length > maxLength)
    return `Must be no more than ${maxLength}  characters`
  return null
}

function validateForm(obj: Record<string, string>) {
  // Функция валидации формы, использующая функцию validateInput, которая валидирует каждый инпут. Эта функция может принимать любое количество инпутов в себя, потому использует for in. Но надо будет дорабатывать validateSampleMin в зависимости от максимального предпологаемого количества инпутов
  let falseValidate = false
  // for in для пробегания по объекту с инпутами
  for (const key in obj) {
    const item = validateInput(
      obj[key],
      validateSampleMin[key as keyof Object],
      25
    )
    if (item === null) {
      errorsValidate.value[key] = ""
    } else {
      errorsValidate.value[key] = item
      falseValidate = true
    }
  }
  // Условие для валидации страницы регистрации (в ней надо проверять, совпадают ли пароли)
  if (Object.keys(obj).length === 3) {
    if (obj.repeatPass !== obj.pass) {
      errorsValidate.value.repeatPass = "Passwords don't match"
      falseValidate = true
    } else {
      errorsValidate.value.repeatPass = ""
      if (!falseValidate) {
        serverValidate(obj, true)
      }
    }
  } else {
    if (!falseValidate) {
      serverValidate(obj)
    }
  }
}

async function serverValidate(
  obj: Record<string, string>,
  thisIsPass?: boolean
) {
  try {
    let link = `name=${obj.name}` + (!thisIsPass ? `&password=${obj.pass}` : "")

    const response = await getData("users", `${link}`)

    console.log(response)

    if (thisIsPass) {
      if (!response.length) {
        successfulRegistration("users", obj)
      } else {
        errorsValidate.value.name = "This name is taken"
      }
    } else {
      if (!response.length) {
        errorsValidate.value.form =
          "Please check that the entered data is correct"
      } else {
        errorsValidate.value.form = ""
        successfulAuthorization(obj.name)
      }
    }
  } catch (error) {
    console.log("Ошибка при получении данных:", error)
  }
}

export { validateForm, passingRouterVariable, errorsValidate }
