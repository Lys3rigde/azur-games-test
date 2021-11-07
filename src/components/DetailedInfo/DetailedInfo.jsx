import { useSelector } from 'react-redux'

import styles from './DetailedInfo.module.css'
export const DetailedInfo = () => {

  const userInfo = useSelector(state => state.table.userInfo)

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span className={styles.infoText}>Выбран пользователь <b className={styles.infoBold}>{userInfo.firstName} {userInfo.lastName}</b></span>
        <span className={styles.infoText}>Описание:</span>
        <textarea value={userInfo.description} readOnly className={styles.textarea} />
        <span className={styles.infoText}>Адрес проживания: <b className={styles.infoBold}>{userInfo.address?.streetAddress}</b></span>
        <span className={styles.infoText}>Город: <b className={styles.infoBold}>{userInfo.address?.city}</b></span>
        <span className={styles.infoText}>Провинция/штат: <b className={styles.infoBold}>{userInfo.address?.state}</b></span>
        <span className={styles.infoText}>Индекс: <b className={styles.infoBold}>{userInfo.address?.zip}</b></span>
      </div>
    </div>
  )
}