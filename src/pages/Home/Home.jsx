import React from 'react'
import { Link } from 'react-router-dom'

// styles
import styles from './Home.module.scss'
import phone from '../../assets/home/desktop/image-hero-phone.png'

export default function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.hero}>
        <h1 className={styles.hero__heading}>
          Award-winning custom designs and digital branding solutions
        </h1>
        <p className={styles['hero__sub-heading']}>
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <Link className={styles.hero__cta}>Learn More</Link>
        <img
          className={styles.hero__image}
          src={phone}
          alt="Smartphone showcasing design"
        />
      </div>
    </section>
  )
}
