import React from 'react'
import { motion } from 'framer-motion'

// styles
import styles from '../../scss/Design.module.scss'
import express from '../../assets/web-design/desktop/image-express.jpg'
import transfer from '../../assets/web-design/desktop/image-transfer.jpg'
import photon from '../../assets/web-design/desktop/image-photon.jpg'
import builder from '../../assets/web-design/desktop/image-builder.jpg'
import blogr from '../../assets/web-design/desktop/image-blogr.jpg'
import camp from '../../assets/web-design/desktop/image-camp.jpg'
import appDesignMobile from '../../assets/home/mobile/image-app-design.jpg'
import graphicDesignMobile from '../../assets/home/mobile/image-graphic-design.jpg'
import appDesignTablet from '../../assets/home/tablet/image-app-design.jpg'
import graphicDesignTablet from '../../assets/home/tablet/image-graphic-design.jpg'
import appDesignDesktop from '../../assets/home/desktop/image-app-design.jpg'
import graphicDesignDesktop from '../../assets/home/desktop/image-graphic-design.jpg'

// components
import HeroCards from '../../components/HeroCards/HeroCards'
import ProjectsCards from '../../components/ProjectsCards/ProjectsCards'
import ServicesCards from '../../components/ServicesCards/ServicesCards'
import Footer from '../../components/Footer/Footer'

// data
const projects = [
  {
    image: express,
    name: 'Express',
    description: 'A multi-carrier shipping website for ecommerce businesses',
  },
  {
    image: transfer,
    name: 'Transfer',
    description:
      'Site for low-cost money transfers and sending money within seconds',
  },
  {
    image: photon,
    name: 'Photon',
    description:
      'A state-of-the-art music player with high-resolution audio and DSP effects',
  },
  {
    image: builder,
    name: 'Builder',
    description:
      'Connects users with local contractors based on their location',
  },
  {
    image: blogr,
    name: 'Blogr',
    description:
      'Blogr is a platform for creating an online blog or publication',
  },
  {
    image: camp,
    name: 'Camp',
    description:
      'Get expert training in coding, data, design, and digital marketing',
  },
]
const services = [
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

export default function WebDesign() {
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
          <HeroCards>
            <h1 className={styles.hero__heading}>Web Design</h1>
            <p className={styles['hero__sub-heading']}>
              We build websites that serve as powerful marketing tools and bring
              memorable brand experiences.
            </p>
          </HeroCards>
        </motion.section>
        <section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className={styles.projects}
        >
          <ProjectsCards data={projects} />
        </section>
        <section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className={styles.services}
        >
          <ServicesCards data={services} />
        </section>
      </main>
      <Footer />
    </React.Fragment>
  )
}
