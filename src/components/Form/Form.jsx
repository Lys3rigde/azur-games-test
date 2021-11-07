import InputMask from "react-input-mask"
import { Formik } from 'formik'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'
import { setNewUser } from '../../store/actions/tableActions'

import styles from './Form.module.css'

//я не уверен, что обьясню, что здесь происходит лучше, чем документация https://formik.org - работа с формами и https://github.com/jquense/yup - валидация

export const Form = () => {

  const dispatch = useDispatch()

  const newUser = (data, resetForm) => {
    dispatch(setNewUser(data))
    resetForm()
  }

  const validSchema = yup.object().shape({
    id: yup.number().typeError('id Должен быть числом').required('Укажите id пользователя'),
    firstName: yup.string().required('Укажите имя пользователя'),
    lastName: yup.string().required('Укажите фамилию пользователя'),
    email: yup.string().email('Укажите действительный email').required('Укажите email пользователя'),
    phone: yup.string().min(10, 'Укажите действительный номер').required('Укажите номер пользователя')
  })

  return (
    <div>
      <Formik
        initialValues={{
          id: '',
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
        }}
        validateOnBlur
        onSubmit={(values, { resetForm }) => { newUser(values, resetForm) }}
        validationSchema={validSchema}
      >
        {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit }) => (
          <div className={styles.wrapper}>
            <div className={styles.form}>
              <label className={styles.text} htmlFor={'id'}>id</label>
              <label className={styles.text} htmlFor={'firstName'}>firstName</label>
              <label className={styles.text} htmlFor={'lastName'}>lastName</label>
              <label className={styles.text} htmlFor={'email'}>email</label>
              <label className={styles.text} htmlFor={'phone'}>phone</label>
              <input
                className={styles.input}
                type={"text"}
                name={"id"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.id}
                placeholder="id"
              />
              <input
                className={styles.input}
                type={"text"}
                name={"firstName"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
                placeholder="firstName"
              />
              <input
                className={styles.input}
                type={"text"}
                name={"lastName"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
                placeholder="lastName"
              />
              <input
                className={styles.input}
                type={"email"}
                name={"email"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="email"
              />
              <InputMask
                mask="(999)999-9999"
                className={styles.input}
                type={"text"}
                name={"phone"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
                placeholder="phone"
              />
              {touched.id && errors.id ? <span className={styles.error}>{errors.id}</span> : <span></span>}
              {touched.firstName && errors.firstName ? <span className={styles.error}>{errors.firstName}</span> : <span></span>}
              {touched.lastName && errors.lastName ? <span className={styles.error}>{errors.lastName}</span> : <span></span>}
              {touched.email && errors.email ? <span className={styles.error}>{errors.email}</span> : <span></span>}
              {touched.phone && errors.phone ? <span className={styles.error}>{errors.phone}</span> : <span></span>}
            </div>
            <button
              disabled={!isValid}
              className={styles.button}
              onClick={handleSubmit}
              type={"submit"}
            >
              Добавить пользователя
            </button>
          </div>
        )
        }
      </Formik >
    </div>
  )
}