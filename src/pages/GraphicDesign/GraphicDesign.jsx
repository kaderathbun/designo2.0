import React from 'react'

// styles
import styles from '../../scss/Design.module.scss'
import timBrown from '../../assets/graphic-design/desktop/image-change.jpg'
import boxedWater from '../../assets/graphic-design/desktop/image-boxed-water.jpg'
import science from '../../assets/graphic-design/desktop/image-science.jpg'
import appDesignMobile from '../../assets/home/mobile/image-app-design.jpg'
import webDesignMobile from '../../assets/home/mobile/image-web-design.jpg'
import appDesignTablet from '../../assets/home/tablet/image-app-design.jpg'
import webDesignTablet from '../../assets/home/tablet/image-web-design.jpg'
import appDesignDesktop from '../../assets/home/desktop/image-app-design.jpg'
import webDesignDesktop from '../../assets/home/desktop/image-web-design-small.jpg'

// components
import HeroCards from '../../components/HeroCards/HeroCards'
import ProjectsCards from '../../components/ProjectsCards/ProjectsCards'
import ServicesCards from '../../components/ServicesCards/ServicesCards'
import Footer from '../../components/Footer/Footer'

// data
const projects = [
  {
    image: timBrown,
    name: 'Tim Brown',
    description: 'A book cover designed for Tim Brown’s new release, ‘Change’',
  },
  {
    image: boxedWater,
    name: 'Boxed Water',
    description: 'A simple packaging concept made for Boxed Water',
  },
  {
    image: science,
    name: 'Science!',
    description: 'A poster made in collaboration with the Federal Art Project',
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
    heading: 'Web Design',
    imageMobile: webDesignMobile,
    imageTablet: webDesignTablet,
    imageDesktop: webDesignDesktop,
    redirect: '/web-design',
  },
]

export default function GraphicDesign() {
  return (
    <React.Fragment>
      <main>
        <section className={styles.hero}>
          <HeroCards>
            <h1 className={styles.hero__heading}>Graphic Design</h1>
            <p className={styles['hero__sub-heading']}>
              We deliver eye-catching branding materials that are tailored to
              meet your business objectives.
            </p>
          </HeroCards>
        </section>
        <section className={styles.projects}>
          <ProjectsCards data={projects} />
        </section>
        <section className={styles.services}>
          <ServicesCards data={services} />
        </section>
      </main>
      <Footer />
    </React.Fragment>
  )
}
