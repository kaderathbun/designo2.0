import React from 'react'

// styles
import styles from './HeroCards.module.scss'

export default function HeroCards({ children }) {
  return <div className={styles.card}>{children}</div>
}
