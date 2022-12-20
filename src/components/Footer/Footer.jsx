import React from 'react'
import { Link } from 'react-router-dom'

// styles
import styles from './Footer.module.scss'
import logo from '../../assets/shared/desktop/logo-light.png'
import facebook from '../../assets/shared/desktop/icon-facebook.svg'
import youtube from '../../assets/shared/desktop/icon-youtube.svg'
import twitter from '../../assets/shared/desktop/icon-twitter.svg'
import pinterest from '../../assets/shared/desktop/icon-pinterest.svg'
import instagram from '../../assets/shared/desktop/icon-instagram.svg'

const socials = [
  {
    img: facebook,
    name: 'Facebook',
    redirect: 'https://www.facebook.com',
  },
  {
    img: youtube,
    name: 'Youtube',
    redirect: 'https://www.youtube.com',
  },
  {
    img: twitter,
    name: 'Twitter',
    redirect: 'https://www.twitter.com',
  },
  {
    img: pinterest,
    name: 'Pinterest',
    redirect: 'https://www.pinterest.com',
  },
  {
    img: instagram,
    name: 'Instagram',
    redirect: 'https://www.instagram.com',
  },
]

export default function Footer({ isSecondary }) {
  return (
    <footer
      className={styles.footer}
      style={{
        background: isSecondary
          ? 'linear-gradient(0deg, #1d1c1e 100%, rgb(255, 255, 255) 100%)'
          : {},
      }}
    >
      <div
        className={styles.footer__card}
        style={{ display: isSecondary ? 'none' : 'flex' }}
      >
        <h3 className={styles['footer__card-heading']}>
          Let’s talk about your project
        </h3>
        <p className={styles['footer__card-sub-heading']}>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
        <Link className={styles.footer__cta}>Get in touch</Link>
      </div>
      <div className={styles['footer__info-container']}>
        <img className={styles.footer__logo} src={logo} alt="Designo" />
        <ul className={styles.footer__nav}>
          <li className={styles['footer__nav-links']}>
            <Link>Our Company</Link>
          </li>
          <li className={styles['footer__nav-links']}>
            <Link>Locations</Link>
          </li>
          <li className={styles['footer__nav-links']}>
            <Link>Contact</Link>
          </li>
        </ul>
        <address className={styles['footer__address-container']}>
          <span className={styles.footer__address}>
            <strong>Designo Central Office</strong> <br />
            3886 Wellington Street <br />
            Toronto, Ontario M9C 3J5
          </span>
        </address>
        <address className={styles['footer__contact-container']}>
          <span className={styles.footer__address}>
            <strong>Contact Us (Central Office)</strong> <br />
            <a href="tel:+12538638967">P : +1 253-863-8967</a> <br />
            <a href="mailto:contact@designo.co">M : contact@designo.co</a>
          </span>
        </address>
        <div className={styles['footer__social-menu']}>
          {socials.map((social) => {
            return (
              <a
                key={social.name}
                href={social.redirect}
                target="_blank"
                rel="noreferrer"
              >
                <img src={social.img} alt={social.name} />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
