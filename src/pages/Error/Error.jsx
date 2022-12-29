import React from 'react'
import { PuffLoader } from 'react-spinners'
import { useNavigate } from 'react-router-dom'

import styles from './Error.module.scss'

export default function Error() {
  const navigate = useNavigate()

  setTimeout(() => {
    navigate('/')
  }, 5000)

  return (
    <main>
      <section className={styles.error}>
        <h1 className={styles.error__heading}>This page does not exist.</h1>
        <p className={styles['error__sub-heading']}>
          Redirecting you to the homepage shortly...
        </p>
        <PuffLoader />
      </section>
    </main>
  )
}
