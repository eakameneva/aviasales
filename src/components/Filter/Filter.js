import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { selectCheckbox, selectAllCheckbox } from '../../store/aviasalesSlice'
import { getStopsLabel } from '../../helpers'

import styles from './Filter.module.scss'

const FILTERS = [0, 1, 2, 3]

export default function Filter() {
  const dispatch = useDispatch()
  const filtersArray = useSelector((state) => state.aviasales.chosenCheckbox)
  const handleChange = (filterName) => {
    dispatch(selectCheckbox(filterName))
  }
  const isAllSelected = filtersArray.length === FILTERS.length

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
      {FILTERS.map((filter) => (
        <label className={styles.label} key={filter}>
          <input
            type='checkbox'
            className={styles['real-checkbox']}
            onChange={() => handleChange(filter)}
            checked={filtersArray.includes(filter)}
          />
          <span className={styles['custom-checkbox']} />
          {getStopsLabel(filter)}
        </label>
      ))}
    </div>
  )
}
