import React from 'react'

import FlightDetails from '../FlightDetails/FlightDetails'

import styles from './Ticket.module.scss'

export default function Ticket({ ticket }) {
  return (
    <div className={styles['ticket-container']}>
      <div className={styles['ticket-info']}>
        <p className={styles.price}>{ticket.price} Р</p>
        <img className={styles.logo} src={`http://pics.avs.io/99/36/${ticket.carrier}.svg`} alt='company-logo' />
      </div>
      <div className={styles['flight-details']}>
        {ticket.segments.map((segment) => (
          <FlightDetails segment={segment} key={`${segment.origin}-${segment.destination}-${segment.duration}`} />
        ))}
      </div>
    </div>
  )
}
