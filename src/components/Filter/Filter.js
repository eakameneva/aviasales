import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { selectCheckbox, selectAllCheckbox } from '../../store/aviasalesSlice'

import styles from './Filter.module.scss'

export default function Filter() {
  const dispatch = useDispatch()
  const filtersArray = useSelector((state) => state.aviasales.chosenCheckbox)
  const handleChange = (filterName) => {
    dispatch(selectCheckbox(filterName))
  }
  const isAllSelected = filtersArray.length === 4

  return (
    <div className={styles.form}>
      <p className={styles.heading}>КОЛИЧЕСТВО ПЕРЕСАДОК</p>
      <label className={styles.label}>
        <input
          type='checkbox'
          className={styles['real-checkbox']}
          onChange={() => dispatch(selectAllCheckbox(isAllSelected))}
          checked={isAllSelected}
        />
        <span className={styles['custom-checkbox']} />
        Все
      </label>

      <label className={styles.label}>
        <input
          type='checkbox'
          className={styles['real-checkbox']}
          onChange={() => handleChange(0)}
          checked={filtersArray.includes(0)}
        />
        <span className={styles['custom-checkbox']} />
        Без пересадок
      </label>

      <label className={styles.label}>
        <input
          type='checkbox'
          className={styles['real-checkbox']}
          onChange={() => handleChange(1)}
          checked={filtersArray.includes(1)}
        />
        <span className={styles['custom-checkbox']} />1 пересадка
      </label>

      <label className={styles.label}>
        <input
          type='checkbox'
          className={styles['real-checkbox']}
          onChange={() => handleChange(2)}
          checked={filtersArray.includes(2)}
        />
        <span className={styles['custom-checkbox']} />2 пересадки
      </label>

      <label className={styles.label}>
        <input
          type='checkbox'
          className={styles['real-checkbox']}
          onChange={() => handleChange(3)}
          checked={filtersArray.includes(3)}
        />
        <span className={styles['custom-checkbox']} />3 пересадки
      </label>
    </div>
  )
}
