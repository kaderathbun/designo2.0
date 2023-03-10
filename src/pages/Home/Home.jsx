import React from 'react'
import { Link } from 'react-router-dom'
import { delay, motion } from 'framer-motion'

// styles
import styles from './Home.module.scss'
import phone from '../../assets/home/desktop/image-hero-phone.png'
import webDesignMobile from '../../assets/home/mobile/image-web-design.jpg'
import appDesignMobile from '../../assets/home/mobile/image-app-design.jpg'
import graphicDesignMobile from '../../assets/home/mobile/image-graphic-design.jpg'
import webDesignTablet from '../../assets/home/tablet/image-web-design.jpg'
import appDesignTablet from '../../assets/home/tablet/image-app-design.jpg'
import graphicDesignTablet from '../../assets/home/tablet/image-graphic-design.jpg'
import webDesignDesktop from '../../assets/home/desktop/image-web-design-large.jpg'
import appDesignDesktop from '../../assets/home/desktop/image-app-design.jpg'
import graphicDesignDesktop from '../../assets/home/desktop/image-graphic-design.jpg'

// components
import ServicesCards from '../../components/ServicesCards/ServicesCards'
import Traits from '../../components/Traits/Traits'
import Footer from '../../components/Footer/Footer'

const services = [
  {
    heading: 'Web Design',
    imageMobile: webDesignMobile,
    imageTablet: webDesignTablet,
    imageDesktop: webDesignDesktop,
    redirect: '/web-design',
  },
  {
    heading: 'App Design',
    imageMobile: appDesignMobile,
    imageTablet: appDesignTablet,
    imageDesktop: appDesignDesktop,
    redirect: '/app-design',
  },
  {
    heading: 'Graphic Design',
    imageMobile: graphicDesignMobile,
    imageTablet: graphicDesignTablet,
    imageDesktop: graphicDesignDesktop,
    redirect: '/graphic-design',
  },
]

export default function Home() {
  return (
    <React.Fragment>
      <main>
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className={styles.hero}
        >
          <h1 className={styles.hero__heading}>
            Award-winning custom designs and digital branding solutions
          </h1>
          <p className={styles['hero__sub-heading']}>
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <Link to="about" className={styles.hero__cta}>
            Learn More
          </Link>
          <img
            className={styles.hero__image}
            src={phone}
            alt="Smartphone showcasing design"
          />
        </motion.section>
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className={styles.services}
        >
          <ServicesCards data={services} />
        </motion.section>
        <section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className={styles.traits}
        >
          <Traits />
        </section>
      </main>
      <Footer isSecondary={false} />
    </React.Fragment>
  )
}
