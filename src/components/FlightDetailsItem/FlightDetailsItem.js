import React from 'react'
import { format, addMinutes } from 'date-fns'

import styles from './FlightDetailsItem.module.scss'

export default function FlightDetailsItem({ segment }) {
  function toHoursAndMinutes(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60)
    const minutes = totalMinutes % 60
    return `${hours}ч ${minutes < 10 ? `0${minutes}` : minutes}м`
  }

  const departureDate = new Date(segment.date)
  const arrivalDate = addMinutes(departureDate, segment.duration)
  const formattedDeparture = format(departureDate, 'HH:mm')
  const formattedArrival = format(arrivalDate, 'HH:mm')

  const getStopsLabel = (stopsCount) => {
    if (stopsCount === 0) {
      return 'БЕЗ ПЕРЕСАДОК'
    }
    if (stopsCount === 1) {
      return '1 ПЕРЕСАДКА'
    }
    if (stopsCount > 1) {
      return `${stopsCount} ПЕРЕСАДКИ`
    }
    return `${stopsCount} ПЕРЕСАДОК`
  }

  return (
    <div className={styles['details-container']}>
      <div className={styles.details}>
        <p className={styles['details-header']}>
          {segment.origin}– {segment.destination}
        </p>
        <p className={styles['details-info']}>{`${formattedDeparture} – ${formattedArrival}`}</p>
      </div>
      <div className={styles.details}>
        <p className={styles['details-header']}>В ПУТИ</p>
        <p className={styles['details-info']}>{toHoursAndMinutes(segment.duration)}</p>
      </div>
      <div className={styles.details}>
        <p className={styles['details-header']}>{getStopsLabel(segment.stops.length)}</p>
        <p className={styles['details-info']}>{segment.stops.join(', ')}</p>
      </div>
    </div>
  )
}
