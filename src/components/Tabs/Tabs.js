import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { changeTab } from '../../store/aviasalesSlice'

import styles from './Tabs.module.scss'

export default function Tabs() {
  const dispatch = useDispatch()
  const chosenFilter = useSelector((state) => state.aviasales.chosenTab)

  return (
    <div className={styles['button-container']}>
      <button
        type='button'
        className={chosenFilter === 'cheapest' ? `${styles.button} ${styles.chosen}` : `${styles.button}`}
        onClick={() => dispatch(changeTab('cheapest'))}
      >
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button
        type='button'
        className={chosenFilter === 'fastest' ? `${styles.button} ${styles.chosen}` : `${styles.button}`}
        onClick={() => dispatch(changeTab('fastest'))}
      >
        САМЫЙ БЫСТРЫЙ
      </button>
      <button
        type='button'
        className={chosenFilter === 'optimal' ? `${styles.button} ${styles.chosen}` : `${styles.button}`}
        onClick={() => dispatch(changeTab('optimal'))}
      >
        ОПТИМАЛЬНЫЙ
      </button>
    </div>
  )
}
