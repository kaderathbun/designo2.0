import React from 'react'

// styles
import styles from './Modal.module.scss'
import navCloseIcon from '../../assets/shared/mobile/icon-close.svg'

export default function Modal({ setIsOpen }) {
  return (
    <div className={styles.modal}>
      <div className={styles.modal__container}>
        <h3 className={styles.modal__heading}>Thanks for your Response!</h3>
        <p className={styles['modal__sub-heading']}>
          This is a test application. Your response was recorded, but not
          submited.
        </p>
        <button
          onClick={(prevState) => setIsOpen(false)}
          className={styles.modal__btn}
        >
          <img src={navCloseIcon} alt="close" />
        </button>
      </div>
    </div>
  )
}
