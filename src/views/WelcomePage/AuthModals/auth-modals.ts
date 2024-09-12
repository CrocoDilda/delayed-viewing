import { ref } from "vue"

import { goToRoutesPage } from "../../views-scripts"

import { getData } from "../../views-scripts"

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
  console.log(routerInstance)
}

function successfulAuthorization() {
  // функция для передачи переменной роутера
  goToRoutesPage(routerInstance, "/home")
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
        serverValidate(obj.name, obj.pass, true)
      }
    }
  } else {
    if (!falseValidate) {
      serverValidate(obj.name, obj.pass)
    }
  }
}

async function serverValidate(
  userName: string,
  userPass?: string,
  thisIsPass?: boolean
) {
  try {
    let link = `name=${userName}` + (!thisIsPass ? `&password=${userPass}` : "")

    const response = await getData("users", `${link}`)

    console.log(response)

    if (thisIsPass) {
      if (!response.length) {
        console.log(!response.length)
        successfulAuthorization()
      } else {
        errorsValidate.value.name = "This name is taken"
      }
    } else {
      if (!response.length) {
        errorsValidate.value.form =
          "Please check that the entered data is correct"
      } else {
        errorsValidate.value.form = ""
        successfulAuthorization()
      }
    }
  } catch (error) {
    console.log("Ошибка при получении данных:", error)
  }
}

export { validateForm, passingRouterVariable, errorsValidate }
