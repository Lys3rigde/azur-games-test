import { useState } from 'react'

import { Arrow } from '../Arrow/Arrow'
import styles from './TableHeader.module.css'

export const TableHeader = ({ sortData, arrowDirection }) => {
  const [activeArrow, setActiveArrow] = useState('')

  const sortArrowData = target => { // сортировка данных, изменение активной стрелки
    sortData(target)
    setActiveArrow(target)
  }

  return (
    <div className={styles.wrapper}>
      <span className={styles.colTitle} onClick={() => sortArrowData('id')}>
        id
        <Arrow activeArrow={activeArrow === 'id' ? arrowDirection : null} />
      </span>
      <span className={styles.colTitle} onClick={() => sortArrowData('firstName')}>
        firstName
        <Arrow activeArrow={activeArrow === 'firstName' ? arrowDirection : null} />
      </span>
      <span className={styles.colTitle} onClick={() => sortArrowData('lastName')}>
        lastName
        <Arrow activeArrow={activeArrow === 'lastName' ? arrowDirection : null} />
      </span>
      <span className={styles.colTitle} onClick={() => sortArrowData('email')}>
        email
        <Arrow activeArrow={activeArrow === 'email' ? arrowDirection : null} />
      </span>
      <span className={styles.colTitle} onClick={() => sortArrowData('phone')}>
        phone
        <Arrow activeArrow={activeArrow === 'phone' ? arrowDirection : null} />
      </span>
    </div>

  )

}
