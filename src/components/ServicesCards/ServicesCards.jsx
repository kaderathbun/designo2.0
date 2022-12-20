import React from 'react'
import { Link } from 'react-router-dom'

// styles
import styles from './ServicesCards.module.scss'
import arrow from '../../assets/shared/desktop/icon-right-arrow.svg'
import webDesignMobile from '../../assets/home/mobile/image-web-design.jpg'
import appDesignMobile from '../../assets/home/mobile/image-app-design.jpg'
import graphicDesignMobile from '../../assets/home/mobile/image-graphic-design.jpg'

// data
const services = [
  {
    heading: 'Web Design',
    image: webDesignMobile,
  },
  {
    heading: 'App Design',
    image: appDesignMobile,
  },
  {
    heading: 'Graphic Design',
    image: graphicDesignMobile,
  },
]

export default function ServicesCards() {
  return (
    <React.Fragment>
      {services.map((service) => {
        return (
          <div key={service.heading} className={styles.card}>
            <img
              className={styles.card__image}
              src={service.image}
              alt={service.heading}
            />
            <div className={styles['card__text-container']}>
              <span className={styles.card__heading}>{service.heading}</span>
              <span className={styles['card__sub-heading']}>
                View Projects
                <img className={styles.card__arrow} src={arrow} alt="" />
              </span>
            </div>
            <Link className={styles.card__link}></Link>
          </div>
        )
      })}
    </React.Fragment>
  )
}
