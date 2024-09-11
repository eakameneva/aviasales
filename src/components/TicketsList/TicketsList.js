import React from 'react'
import { useSelector } from 'react-redux'

import Ticket from '../Ticket'

import styles from './TicketsList.module.scss'

export default function TicketsList({ visibleTicketsCount, tickets }) {
  const { isAllTicketsLoaded } = useSelector((state) => state.aviasales)
  if (tickets.length === 0 && isAllTicketsLoaded) {
    return <h4 className={styles['no-tickets-heading']}>Рейсов, подходящих под заданные фильтры, не найдено</h4>
  }
  const ticketsToShow = tickets.slice(0, visibleTicketsCount)
  return (
    <div className={styles['tickets-list']}>
      {ticketsToShow.map((ticket) => (
        <Ticket ticket={ticket} key={ticket.id} />
      ))}
    </div>
  )
}
