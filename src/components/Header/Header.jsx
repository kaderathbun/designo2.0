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

  return (
    <nav className={styles.header}>
      <div className={styles.header__container}>
        <img className={styles.header__logo} src={logo} alt="" />
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
          <Link>Our Company</Link>
        </li>
        <li className={styles.header__links}>
          <Link>Locations</Link>
        </li>
        <li className={styles.header__links}>
          <Link>Contact</Link>
        </li>
      </ul>
    </nav>
  )
}
