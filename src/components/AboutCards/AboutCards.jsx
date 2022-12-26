import React from 'react'

// styles
import styles from './AboutCards.module.scss'

export default function AboutCards({
  image,
  alt,
  children,
  isSecondary,
  styleCard,
  styleImage,
  styleContainer,
}) {
  return (
    <div className={styles.card} style={styleCard}>
      <img
        className={styles.card__image}
        src={image}
        alt={alt}
        style={styleImage}
      />
      <div
        className={
          isSecondary
            ? `${styles['card__container--secondary']}`
            : styles.card__container
        }
        style={styleContainer}
      >
        {children}
      </div>
    </div>
  )
}
