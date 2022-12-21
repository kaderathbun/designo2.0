import React from 'react'

// styles
import styles from './AboutCards.module.scss'

export default function AboutCards({
  image,
  alt,
  children,
  isSecondary,
  style,
}) {
  return (
    <div className={styles.card} style={style}>
      <img className={styles.card__image} src={image} alt={alt} />
      <div
        className={
          isSecondary
            ? `${styles['card__container--secondary']}`
            : styles.card__container
        }
      >
        {children}
      </div>
    </div>
  )
}
