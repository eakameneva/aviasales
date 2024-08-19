import React from 'react'

import FlightDetails from '../FlightDetails/FlightDetails'

import styles from './Ticket.module.scss'

export default function Ticket() {
  return (
    <div className={styles['ticket-container']}>
      <div className={styles['ticket-info']}>
        <p className={styles.price}>13 400 P</p>
      </div>
      <div className={styles['flight-details']}>
        <FlightDetails />
        <FlightDetails />
      </div>
    </div>
  )
}
