import fallbackImage from "../../../components/icons/clapper-board.svg"

function minToHour(minets: string) {
  const min = Number(minets)
  return `${Math.trunc(min / 60)}h ${min % 60} min`
}

// Обработчик ошибки загрузки изображения
function onImageError(e: Event) {
  if (e.target) {
    const target = e.target as HTMLImageElement
    target.src = fallbackImage
  }
}

export { minToHour, onImageError }
