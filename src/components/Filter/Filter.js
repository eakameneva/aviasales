import React from 'react'

import styles from './Filter.module.scss'

export default function Filter() {
  return (
    <div className={styles.form}>
      <p className={styles.heading}>КОЛИЧЕСТВО ПЕРЕСАДОК</p>
      <label className={styles.label}>
        <input type='checkbox' className={styles['real-checkbox']} />
        <span className={styles['custom-checkbox']} />
        Все
      </label>

      <label className={styles.label}>
        <input type='checkbox' className={styles['real-checkbox']} />
        <span className={styles['custom-checkbox']} />
        Без пересадок
      </label>

      <label className={styles.label}>
        <input type='checkbox' className={styles['real-checkbox']} />
        <span className={styles['custom-checkbox']} />1 пересадка
      </label>

      <label className={styles.label}>
        <input type='checkbox' className={styles['real-checkbox']} />
        <span className={styles['custom-checkbox']} />2 пересадки
      </label>

      <label className={styles.label}>
        <input type='checkbox' className={styles['real-checkbox']} />
        <span className={styles['custom-checkbox']} />3 пересадки
      </label>
    </div>
  )
}
