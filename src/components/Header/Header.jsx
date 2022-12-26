import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// styles
import styles from './Header.module.scss'
import logo from '../../assets/shared/desktop/logo-dark.png'
import navHamburgerIcon from '../../assets/shared/mobile/icon-hamburger.svg'
import navCloseIcon from '../../assets/shared/mobile/icon-close.svg'

export default function Header() {
  //mobile logic
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  if (isOpen) {
    document.body.style.overflow = 'hidden'
    window.scrollTo(0, 0)
  } else {
    document.body.style.overflow = 'auto'
  }

  return (
    <nav className={styles.header}>
      <div className={styles.header__container}>
        <Link to="/" onClick={(prevState) => setIsOpen(false)}>
          <img className={styles.header__logo} src={logo} alt="" />
        </Link>

        <img
          onClick={handleClick}
          className={styles.header__controller}
          src={isOpen ? navCloseIcon : navHamburgerIcon}
          alt={isOpen ? 'Close Menu' : 'Open Menu'}
        />
      </div>
      <ul
        className={
          isOpen
            ? [styles.header__menu, styles['header__menu--active']].join(' ')
            : styles.header__menu
        }
      >
        <li className={styles.header__links}>
          <Link to="/about" onClick={(prevState) => setIsOpen(false)}>
            Our Company
          </Link>
        </li>
        <li className={styles.header__links}>
          <Link to="/locations" onClick={(prevState) => setIsOpen(false)}>
            Locations
          </Link>
        </li>
        <li className={styles.header__links}>
          <Link to="/contact" onClick={(prevState) => setIsOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}
