import { ref } from "vue"

import { goToRoutesPage, address } from "@/utils/utils"

type ObjectNum = Record<string, number>
type ObjectStr = Record<string, string>

// Создаем реактивный объект для хранения ошибок валидации
const errorsValidate = ref<ObjectStr>({
  name: "",
  pass: "",
  form: "",
  email: "",
})

const loading = ref(false)
const text = ref()

// Объект с минимальными длинами для полей
const validateSampleMin: ObjectNum = {
  name: 2,
  pass: 6,
  passRepeat: 6,
  email: 5,
}

let routerInstance: any = null

// Функция для передачи переменной роутера
function passingRouterVariable(router: any) {
  routerInstance = router
}

// Функция валидации инпута
function validateInput(
  valueValidate: string,
  minLength: number,
  maxLength: number
): string | null {
  if (valueValidate.length < minLength)
    return `Must be at least ${minLength} characters`
  if (valueValidate.length > maxLength)
    return `Must be no more than ${maxLength} characters`
  return null
}

// Функция валидации email
function validateEmail(email: string): string | null {
  const pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  if (!pattern.test(email)) {
    return "Invalid email address"
  }
  return null
}

// Функция валидации формы
function validateForm(obj: Record<string, string>, ivent: string) {
  let falseValidate = false
  console.log(ivent)
  // Проходим по всем полям формы
  for (const key in obj) {
    let item: string | null = null

    // Валидация email
    if (key === "email") {
      item = validateEmail(obj[key])
    } else {
      // Валидация других полей
      item = validateInput(
        obj[key],
        validateSampleMin[key as keyof ObjectNum],
        25
      )
    }

    // Устанавливаем ошибку или очищаем поле ошибки
    if (item === null) {
      errorsValidate.value[key] = ""
    } else {
      errorsValidate.value[key] = item
      falseValidate = true
    }
  }

  // Проверка на совпадение паролей (для регистрации)
  if (ivent === "reg") {
    if (obj.repeatPass !== obj.pass) {
      errorsValidate.value.repeatPass = "Passwords don't match"
      falseValidate = true
    } else {
      errorsValidate.value.repeatPass = ""
      if (!falseValidate) {
        const validObj = {
          fullName: obj.name,
          email: obj.email,
          password: obj.pass,
        }
        registerAndAuthorizeUser(validObj, "register")
      }
    }
  } else if (ivent === "login") {
    if (!falseValidate) {
      const validObj = {
        email: obj.email,
        password: obj.pass,
      }
      console.log(validObj)
      registerAndAuthorizeUser(validObj, "auth")
    }
  }
}

async function registerAndAuthorizeUser(
  obj: Record<string, string>,
  path: string
) {
  try {
    errorsValidate.value.email = ""
    loading.value = true
    const res = await fetch(`${address}/${path}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })

    const data = await res.json()
    const token = data.token

    localStorage.setItem("userName", data.data.fullName)
    localStorage.setItem("token", token)

    console.log(data)

    goToRoutesPage(routerInstance, "/home", true)
  } catch (error) {
    if (path === "register") {
      errorsValidate.value.email = "This email is taken"
      console.log("Ошибка при регистрации:", error)
    } else {
      errorsValidate.value.email = "Сheck the correctness of the entered data"
      console.log("Ошибка при входе:", error)
    }
  } finally {
    loading.value = false
  }
}

function changeForm(page: string) {
  errorsValidate.value = {
    name: "",
    pass: "",
    form: "",
    email: "",
  }
  goToRoutesPage(routerInstance, page, false)
}

export {
  validateForm,
  passingRouterVariable,
  changeForm,
  errorsValidate,
  loading,
  text,
}
