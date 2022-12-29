import React from 'react'
import { motion } from 'framer-motion'

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
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className={styles.card}
      style={styleCard}
    >
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
    </motion.div>
  )
}
