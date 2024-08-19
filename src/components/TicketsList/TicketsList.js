import React from 'react'

import Ticket from '../Ticket'

import styles from './TicketsList.module.scss'

export default function TicketsList() {
  return (
    <div className={styles['tickets-list']}>
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
    </div>
  )
}
