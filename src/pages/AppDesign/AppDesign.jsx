import React from 'react'

// styles
import styles from '../../scss/Design.module.scss'
import airfilter from '../../assets/app-design/desktop/image-airfilter.jpg'
import eyecam from '../../assets/app-design/desktop/image-eyecam.jpg'
import faceit from '../../assets/app-design/desktop/image-faceit.jpg'
import todo from '../../assets/app-design/desktop/image-todo.jpg'
import loopStudios from '../../assets/app-design/desktop/image-loopstudios.jpg'
import webDesignMobile from '../../assets/home/mobile/image-web-design.jpg'
import graphicDesignMobile from '../../assets/home/mobile/image-graphic-design.jpg'
import webDesignTablet from '../../assets/home/tablet/image-web-design.jpg'
import graphicDesigntablet from '../../assets/home/tablet/image-graphic-design.jpg'

// components
import HeroCards from '../../components/HeroCards/HeroCards'
import ProjectsCards from '../../components/ProjectsCards/ProjectsCards'
import ServicesCards from '../../components/ServicesCards/ServicesCards'
import Footer from '../../components/Footer/Footer'

// data
const projects = [
  {
    image: airfilter,
    name: 'Airfilter',
    description:
      'Solving the problem of poor indoor air quality by filtering the air',
  },
  {
    image: eyecam,
    name: 'Eyecam',
    description:
      'Product that lets you edit your favorite photos and videos at any time',
  },
  {
    image: faceit,
    name: 'Faceit',
    description:
      'Get to meet your favorite internet superstar with the faceit app',
  },
  {
    image: todo,
    name: 'Todo',
    description: 'A todo app that features cloud sync with light and dark mode',
  },
  {
    image: loopStudios,
    name: 'Loop Studios',
    description: 'A VR experience app made for Loopstudios',
  },
]
const services = [
  {
    heading: 'Web Design',
    imageMobile: webDesignMobile,
    imageTablet: webDesignTablet,
    redirect: '/web-design',
  },
  {
    heading: 'Graphic Design',
    imageMobile: graphicDesignMobile,
    imageTablet: graphicDesigntablet,
    redirect: '/graphic-design',
  },
]

export default function AppDesign() {
  return (
    <React.Fragment>
      <main>
        <section className={styles.hero}>
          <HeroCards>
            <h1 className={styles.hero__heading}>App Design</h1>
            <p className={styles['hero__sub-heading']}>
              Our mobile designs bring intuitive digital solutions to your
              customers right at their fingertips.
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
