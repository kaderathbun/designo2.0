import React from 'react'

// styles
import styles from './Locations.module.scss'

// components
import MapCards from '../../components/MapCards/MapCards'
import Footer from '../../components/Footer/Footer'

export default function Locations() {
  return (
    <main>
      <section className={styles.locations}>
        <MapCards />
      </section>
      <Footer isSecondary={false} />
    </main>
  )
}
