import React from 'react'
import { Link } from 'react-router-dom'
import MediaQuery from 'react-responsive'
import { motion } from 'framer-motion'

// styles
import styles from './ServicesCards.module.scss'
import arrow from '../../assets/shared/desktop/icon-right-arrow.svg'

export default function ServicesCards({ data }) {
  return (
    <React.Fragment>
      <MediaQuery minWidth={0} maxWidth={767}>
        {data.map((service) => {
          return (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              key={service.heading}
              className={styles.card}
            >
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
            </motion.div>
          )
        })}
      </MediaQuery>
      <MediaQuery minWidth={768} maxWidth={1439}>
        {data.map((service) => {
          return (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              key={service.heading}
              className={styles.card}
            >
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
            </motion.div>
          )
        })}
      </MediaQuery>
      <MediaQuery minWidth={1440}>
        {data.map((service) => {
          return (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              key={service.heading}
              className={styles.card}
            >
              <img
                className={styles.card__image}
                src={service.imageDesktop}
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
            </motion.div>
          )
        })}
      </MediaQuery>
    </React.Fragment>
  )
}
