import React from 'react'
import { motion } from 'framer-motion'

// styles
import styles from './HeroCards.module.scss'

export default function HeroCards({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className={styles.card}
    >
      {children}
    </motion.div>
  )
}
