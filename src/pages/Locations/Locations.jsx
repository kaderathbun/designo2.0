import React from 'react'

// styles
import styles from './Locations.module.scss'

// components
import MapCards from '../../components/MapCards/MapCards'

export default function Locations() {
  return (
    <main>
      <section className={styles.locations}>
        <MapCards />
      </section>
    </main>
  )
}
