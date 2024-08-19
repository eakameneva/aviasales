import React from 'react'

import styles from './FlightDetailsItem.module.scss'

export default function FlightDetailsItem() {
  return (
    <div className={styles['details-container']}>
      <div className={styles.details}>
        <p className={styles['details-header']}>MOW – HKT</p>
        <p className={styles['details-info']}>10:45 – 08:00</p>
      </div>
      <div className={styles.details}>
        <p className={styles['details-header']}>В ПУТИ</p>
        <p className={styles['details-info']}>21ч 15м</p>
      </div>
      <div className={styles.details}>
        <p className={styles['details-header']}>2 ПЕРЕСАДКИ</p>
        <p className={styles['details-info']}>HKG, JNB</p>
      </div>
    </div>
  )
}
