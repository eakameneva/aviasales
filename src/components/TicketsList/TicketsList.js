import React from 'react'
import { useSelector } from 'react-redux'

import Ticket from '../Ticket'

import styles from './TicketsList.module.scss'

export default function TicketsList({
  visibleTicketsCount,
  filteredTickets,
  sortedCheapestTickets,
  sortedFastestTickets,
}) {
  const { chosenTab, isAllTicketsLoaded } = useSelector((state) => state.aviasales)
  if (filteredTickets.length === 0 && isAllTicketsLoaded) {
    return <h4 className={styles['no-tickets-heading']}>Рейсов, подходящих под заданные фильтры, не найдено</h4>
  }

  let ticketsToShow = []
  if (chosenTab === 'cheapest') {
    ticketsToShow = sortedCheapestTickets.slice(0, visibleTicketsCount)
  } else if (chosenTab === 'fastest') {
    ticketsToShow = sortedFastestTickets.slice(0, visibleTicketsCount)
  } else {
    ticketsToShow = filteredTickets.slice(0, visibleTicketsCount)
  }

  return (
    <div className={styles['tickets-list']}>
      {ticketsToShow.map((ticket) => (
        <Ticket ticket={ticket} key={ticket.id} />
      ))}
    </div>
  )
}
