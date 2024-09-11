export function toHoursAndMinutes(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60
  return `${hours}ч ${minutes < 10 ? `0${minutes}` : minutes}м`
}

export const getStopsLabel = (stopsCount) => {
  if (stopsCount === 0) {
    return 'Без пересадок'
  }
  if (stopsCount === 1) {
    return '1 пересадка'
  }
  if (stopsCount > 1) {
    return `${stopsCount} пересадки`
  }
  return `${stopsCount} пересадок`
}

export const getTabLabel = (tab) => {
  if (tab === 'cheapest') {
    return 'САМЫЙ ДЕШЕВЫЙ'
  }
  if (tab === 'fastest') {
    return 'САМЫЙ БЫСТРЫЙ'
  }
  return 'ОПТИМАЛЬНЫЙ'
}
