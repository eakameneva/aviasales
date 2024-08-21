import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { changeCheckbox } from '../../store/aviasalesSlice'

import styles from './Filter.module.scss'

export default function Filter() {
  const dispatch = useDispatch()
  const filters = useSelector((state) => state.aviasales.chosenCheckbox)
  const handleChange = (filterName) => {
    dispatch(changeCheckbox(filterName))
  }

  return (
    <div className={styles.form}>
      <p className={styles.heading}>КОЛИЧЕСТВО ПЕРЕСАДОК</p>
      <label className={styles.label}>
        <input
          type='checkbox'
          className={styles['real-checkbox']}
          onChange={() => handleChange('all')}
          checked={filters.all}
        />
        <span className={styles['custom-checkbox']} />
        Все
      </label>

      <label className={styles.label}>
        <input
          type='checkbox'
          className={styles['real-checkbox']}
          onChange={() => handleChange('noTransfer')}
          checked={filters.noTransfer}
        />
        <span className={styles['custom-checkbox']} />
        Без пересадок
      </label>

      <label className={styles.label}>
        <input
          type='checkbox'
          className={styles['real-checkbox']}
          onChange={() => handleChange('oneTransfer')}
          checked={filters.oneTransfer}
        />
        <span className={styles['custom-checkbox']} />1 пересадка
      </label>

      <label className={styles.label}>
        <input
          type='checkbox'
          className={styles['real-checkbox']}
          onChange={() => handleChange('twoTransfers')}
          checked={filters.twoTransfers}
        />
        <span className={styles['custom-checkbox']} />2 пересадки
      </label>

      <label className={styles.label}>
        <input
          type='checkbox'
          className={styles['real-checkbox']}
          onChange={() => handleChange('threeTransfers')}
          checked={filters.threeTransfers}
        />
        <span className={styles['custom-checkbox']} />3 пересадки
      </label>
    </div>
  )
}
