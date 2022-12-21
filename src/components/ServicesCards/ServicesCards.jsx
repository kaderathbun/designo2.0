import React from 'react'
import { Link } from 'react-router-dom'
import MediaQuery from 'react-responsive'

// styles
import styles from './ServicesCards.module.scss'
import arrow from '../../assets/shared/desktop/icon-right-arrow.svg'

export default function ServicesCards({ data }) {
  return (
    <React.Fragment>
      <MediaQuery minWidth={0} maxWidth={767}>
        {data.map((service) => {
          return (
            <div key={service.heading} className={styles.card}>
              <img
                className={styles.card__image}
                src={service.imageMobile}
                alt={service.heading}
              />
              <div className={styles['card__text-container']}>
                <span className={styles.card__heading}>{service.heading}</span>
                <span className={styles['card__sub-heading']}>
                  View Projects
                  <img className={styles.card__arrow} src={arrow} alt="" />
                </span>
              </div>
              <Link to={service.redirect} className={styles.card__link}></Link>
            </div>
          )
        })}
      </MediaQuery>
      <MediaQuery minWidth={768} maxWidth={1440}>
        {data.map((service) => {
          return (
            <div key={service.heading} className={styles.card}>
              <img
                className={styles.card__image}
                src={service.imageTablet}
                alt={service.heading}
              />
              <div className={styles['card__text-container']}>
                <span className={styles.card__heading}>{service.heading}</span>
                <span className={styles['card__sub-heading']}>
                  View Projects
                  <img className={styles.card__arrow} src={arrow} alt="" />
                </span>
              </div>
              <Link to={service.redirect} className={styles.card__link}></Link>
            </div>
          )
        })}
      </MediaQuery>
    </React.Fragment>
  )
}
