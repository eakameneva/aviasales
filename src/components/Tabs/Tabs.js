import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { changeTab } from '../../store/aviasalesSlice'
import { getTabLabel } from '../../helpers'

import styles from './Tabs.module.scss'

const TABS = ['cheapest', 'fastest', 'optimal']

export default function Tabs() {
  const dispatch = useDispatch()
  const chosenFilter = useSelector((state) => state.aviasales.chosenTab)

  return (
    <div className={styles['button-container']}>
      {TABS.map((tab) => (
        <button
          key={tab}
          type='button'
          className={chosenFilter === tab ? `${styles.button} ${styles.chosen}` : `${styles.button}`}
          onClick={() => dispatch(changeTab(tab))}
        >
          {' '}
          {getTabLabel(tab)}
        </button>
      ))}
    </div>
  )
}
