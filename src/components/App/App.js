import React from 'react'

import Tabs from '../Tabs'
import Filter from '../Filter'
import TicketsList from '../TicketsList/TicketsList'
import logo from '../../assets/images/logo.svg'

import styles from './App.module.scss'

export default function App() {
  return (
    <div className={styles.wrapper}>
      <img src={logo} alt='plane' className={styles.logo} />
      <div className={styles['page-content']}>
        <Filter />
        <div className={styles['results-content']}>
          <Tabs />
          <TicketsList />
          <button type='button' className={styles.button}>
            {' '}
            ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
          </button>
        </div>
      </div>
    </div>
  )
}
