import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LinearProgress from '@mui/material/LinearProgress'

import { setSearchId, fetchTickets } from '../../store/aviasalesSlice'
import Tabs from '../Tabs'
import Filter from '../Filter'
import TicketsList from '../TicketsList/TicketsList'
import logo from '../../assets/images/logo.svg'

import styles from './App.module.scss'

export default function App() {
  const dispatch = useDispatch()
  const { searchId, loading, error, isAllTicketsLoaded, tickets, chosenCheckbox } = useSelector(
    (state) => state.aviasales
  )
  const [progress, setProgress] = useState(0)
  const [visibleTicketsCount, setvisibleTicketsCount] = useState(5)

  const onShowMoreClick = () => {
    setvisibleTicketsCount((prevCount) => prevCount + 5)
  }

  async function fetchSessionId() {
    const response = await fetch('https://aviasales-test-api.kata.academy/search')
    const result = await response.json()
    dispatch(setSearchId(result.searchId))
  }

  useEffect(() => {
    fetchSessionId()
  }, [dispatch])

  useEffect(() => {
    if (!loading && !isAllTicketsLoaded && searchId) {
      dispatch(fetchTickets(searchId))
    }
  }, [dispatch, searchId, loading, isAllTicketsLoaded])

  useEffect(() => {
    let interval
    if (loading) {
      interval = setInterval(() => {
        setProgress((prevProgress) => (prevProgress >= 80 ? prevProgress : prevProgress + 10))
      }, 500)
    } else {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [loading, error])

  const filteredTickets = tickets.filter((ticket) => {
    let maxStops = 0
    ticket.segments.forEach((segment) => {
      if (segment.stops.length > maxStops) {
        maxStops = segment.stops.length
      }
    })
    return chosenCheckbox.includes(maxStops)
  })

  const ticketsWithDuration = filteredTickets.map((ticket) => {
    const totalDuration = ticket.segments.reduce((sum, segment) => sum + segment.duration, 0)
    return { ...ticket, totalDuration }
  })

  const sortedCheapestTickets = filteredTickets.toSorted((a, b) => a.price - b.price)
  const sortedFastestTickets = ticketsWithDuration.toSorted((a, b) => a.totalDuration - b.totalDuration)

  return (
    <div className={styles.wrapper}>
      <img src={logo} alt='plane' className={styles.logo} />
      <div className={styles.container}>
        {loading && (
          <div className={styles['loader-container']}>
            <LinearProgress variant='determinate' value={progress} />
          </div>
        )}
        <div className={styles['page-content']}>
          <Filter />
          <div className={styles['results-content']}>
            <Tabs />
            {error ? (
              <h2>Произошла ошибка</h2>
            ) : (
              <>
                <TicketsList
                  visibleTicketsCount={visibleTicketsCount}
                  filteredTickets={filteredTickets}
                  sortedCheapestTickets={sortedCheapestTickets}
                  sortedFastestTickets={sortedFastestTickets}
                />
                {filteredTickets.length > 1 && (
                  <button type='button' className={styles.button} onClick={onShowMoreClick}>
                    {' '}
                    ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
