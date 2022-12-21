import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

//styles
import styles from './Contact.module.scss'

// components
import LocationsCards from '../../components/LocationsCards/LocationsCards'
import Footer from '../../components/Footer/Footer'

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export default function Contact() {
  const schema = yup.object().shape({
    name: yup.string().required("Can't be empty!"),
    email: yup.string().email().required('Email Invalid'),
    phone: yup.string().matches(phoneRegExp, "Can't be empty!"),
    message: yup.string().required("Can't be empty!"),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data, e) => {
    e.preventDefault()
    console.log(data)
  }

  return (
    <React.Fragment>
      <main>
        <section className={styles.form}>
          <div className={styles['form__form-container']}>
            <div className={styles['form__hero-wrapper']}>
              <h1 className={styles['form__heading']}>Contact Us</h1>
              <p className={styles['form__sub-heading']}>
                Ready to take it to the next level? Let’s talk about your
                project or idea and find out how we can help your business grow.
                If you are looking for unique digital experiences that’s
                relatable to your users, drop us a line.
              </p>
            </div>
            <form
              className={styles['form__inputs']}
              onSubmit={handleSubmit(onSubmit)}
            >
              <fieldset>
                <input type="text" placeholder="Name" {...register('name')} />
                {errors.name ? (
                  <p className={styles.error}>{errors.name?.message}</p>
                ) : null}
              </fieldset>
              <fieldset>
                <input
                  type="email"
                  placeholder="Email"
                  {...register('email')}
                />
                {errors.email ? (
                  <p className={styles.error}>{errors.email?.message}</p>
                ) : null}
              </fieldset>
              <fieldset>
                <input
                  type="number"
                  placeholder="Phone"
                  {...register('phone')}
                />
                {errors.phone ? (
                  <p className={styles.error}>{errors.phone?.message}</p>
                ) : null}
              </fieldset>
              <fieldset>
                <textarea
                  cols="30"
                  rows="5"
                  placeholder="Your Message"
                  {...register('message')}
                />
                {errors.message ? (
                  <p className={styles.error}>{errors.message?.message}</p>
                ) : null}
              </fieldset>
              <button className={styles.form__btn}>Submit</button>
            </form>
          </div>
        </section>
        <section className={styles.locations}>
          <LocationsCards />
        </section>
      </main>
      <Footer isSecondary={true} />
    </React.Fragment>
  )
}
