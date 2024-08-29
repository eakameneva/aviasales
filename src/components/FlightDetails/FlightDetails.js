import React from 'react'

import FlightDetailsItem from '../FlightDetailsItem/FlightDetailsItem'

export default function FlightDetails({ segment }) {
  return (
    <div>
      <FlightDetailsItem segment={segment} />
    </div>
  )
}
