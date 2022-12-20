import React from 'react'
import { Link } from 'react-router-dom'

// styles
import styles from './Home.module.scss'
import phone from '../../assets/home/desktop/image-hero-phone.png'
import webDesignMobile from '../../assets/home/mobile/image-web-design.jpg'
import appDesignMobile from '../../assets/home/mobile/image-app-design.jpg'
import graphicDesignMobile from '../../assets/home/mobile/image-graphic-design.jpg'

// components
import ServicesCards from '../../components/ServicesCards/ServicesCards'
import Traits from '../../components/Traits/Traits'
import Footer from '../../components/Footer/Footer'

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

export default function Home() {
  return (
    <React.Fragment>
      <main className={styles.home}>
        <section className={styles.hero}>
          <h1 className={styles.hero__heading}>
            Award-winning custom designs and digital branding solutions
          </h1>
          <p className={styles['hero__sub-heading']}>
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <Link className={styles.hero__cta}>Learn More</Link>
          <img
            className={styles.hero__image}
            src={phone}
            alt="Smartphone showcasing design"
          />
        </section>
        <section className={styles.services}>
          <ServicesCards data={services} />
        </section>
        <section className={styles.traits}>
          <Traits />
        </section>
      </main>
      <Footer isSecondary={false} />
    </React.Fragment>
  )
}
