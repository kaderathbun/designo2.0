import React, { Children } from 'react'

// styles
import styles from './Traits.module.scss'
import passionate from '../../assets/home/desktop/illustration-passionate.svg'
import resourceful from '../../assets/home/desktop/illustration-resourceful.svg'
import friendly from '../../assets/home/desktop/illustration-friendly.svg'

// data
const traits = [
  {
    image: passionate,
    heading: 'Passionate',
    subHeading:
      'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.',
  },
  {
    image: resourceful,
    heading: 'Resourceful',
    subHeading:
      'Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.',
  },
  {
    image: friendly,
    heading: 'Friendly',
    subHeading:
      ' We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.',
  },
]

export default function Traits({}) {
  return (
    <React.Fragment>
      {traits.map((trait) => {
        return (
          <div key={trait.heading} className={styles.card}>
            <img
              className={styles.card__image}
              src={trait.image}
              alt={trait.heading}
            />
            <div className={styles.card__container}>
              <h2 className={styles.card__heading}>{trait.heading}</h2>
              <p className={styles['card__sub-heading']}>{trait.subHeading}</p>
            </div>
          </div>
        )
      })}
    </React.Fragment>
  )
}
