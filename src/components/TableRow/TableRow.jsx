import styles from './TableRow.module.css'
import { useDispatch } from 'react-redux'
import { setUserInfo } from '../../store/actions/tableActions';

export const TableRow = ({ userInfo }) => {

  const dispatch = useDispatch();

  const handleClick = () => { //функция передает объект с данным выбранного пользователя для отображения в компоненте DetailedInfo. Также, скролит до него ибо он в конце страницы
    dispatch(setUserInfo(userInfo))
    window.scroll({
      left: 0,
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  }

  return (
    <div className={styles.wrapper} onClick={handleClick}>
      <span className={styles.rowText}>{userInfo.id}</span>
      <span className={styles.rowText}>{userInfo.firstName}</span>
      <span className={styles.rowText}>{userInfo.lastName}</span>
      <span className={styles.rowText}>{userInfo.email}</span>
      <span className={styles.rowText}>{userInfo.phone}</span>
    </div>
  )
}
