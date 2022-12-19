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
          <div className={styles.card}>
            <img
              className={styles.image}
              src={service.image}
              alt={service.heading}
            />
            <div className={styles['text-container']}>
              <span className={styles.heading}>{service.heading}</span>
              <span className={styles['sub-heading']}>
                View Projects
                <img className={styles.arrow} src={arrow} alt="" />
              </span>
            </div>
            <Link className={styles.link}></Link>
          </div>
        )
      })}
    </React.Fragment>
  )
}
