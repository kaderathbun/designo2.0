import React from 'react'

import styles from './ProjectsCards.module.scss'

export default function ProjectsCards({ data }) {
  // console.log(data)
  return (
    <React.Fragment>
      {data.map((project) => {
        return (
          <div key={project.name} className={styles.card}>
            <img
              className={styles.card__image}
              src={project.image}
              alt={`Project '${project.name}', created by Designo`}
            />
            <div className={styles.card__container}>
              <h2 className={styles.card__heading}>{project.name}</h2>
              <p className={styles.card__description}>{project.description}</p>
            </div>
          </div>
        )
      })}
    </React.Fragment>
  )
}
