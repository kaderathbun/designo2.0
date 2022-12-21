import React from 'react'
import { Link } from 'react-router-dom'

// styles
import styles from './LocationsCards.module.scss'
import canada from '../../assets/shared/desktop/illustration-canada.svg'
import australia from '../../assets/shared/desktop/illustration-australia.svg'
import unitedKingdom from '../../assets/shared/desktop/illustration-united-kingdom.svg'

// data
const locations = [
  {
    image: canada,
    country: 'Canada',
  },
  {
    image: australia,
    country: 'Australia',
  },
  {
    image: unitedKingdom,
    country: 'United Kingdom',
  },
]

export default function LocationsCards() {
  return (
    <React.Fragment>
      {locations.map((location) => {
        return (
          <div className={styles.card}>
            <img
              className={styles.card__image}
              src={location.image}
              alt={location.country}
            />
            <h2 className={styles.card__heading}>{location.country}</h2>
            <Link className={styles.card__cta} to="/locations">See Location</Link>
          </div>
        )
      })}
    </React.Fragment>
  )
}
