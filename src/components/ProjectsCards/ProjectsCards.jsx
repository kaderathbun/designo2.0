import React from 'react'
import { motion } from 'framer-motion'

import styles from './ProjectsCards.module.scss'

export default function ProjectsCards({ data }) {
  return (
    <React.Fragment>
      {data.map((project) => {
        return (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            key={project.name}
            className={styles.card}
          >
            <img
              className={styles.card__image}
              src={project.image}
              alt={`Project '${project.name}', created by Designo`}
            />
            <div className={styles.card__container}>
              <h2 className={styles.card__heading}>{project.name}</h2>
              <p className={styles.card__description}>{project.description}</p>
            </div>
          </motion.div>
        )
      })}
    </React.Fragment>
  )
}
