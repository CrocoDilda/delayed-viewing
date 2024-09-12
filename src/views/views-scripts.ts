function goToRoutesPage(router: any, views: string) {
  router.push(views)
}

// функция для получения данных с ресурса (в resource указываешь ресурс, а в path - параметры)
async function getData(resource: string, path?: string) {
  try {
    const adress = `https://73509f220638bf50.mokky.dev`
    const url = path ? `${adress}/${resource}?${path}` : `${adress}/${resource}`

    const response = await fetch(`${url}`)

    console.log(response)
    if (!response.ok) {
      throw new Error("Network response was not ok")
    }
    return await response.json()
  } catch (error) {
    console.error("Ошибка при получении данных:", error)
    throw error // Перебрасываем ошибку, чтобы её можно было обработать выше по стеку
  }
}

export { goToRoutesPage, getData }
