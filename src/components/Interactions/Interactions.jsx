import styles from './Interactions.module.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setFormVisible, setSearchValue, setUnfilteredData } from '../../store/actions/tableActions'

export const Interactions = () => {

  const dispatch = useDispatch()
  const isVisible = useSelector(state => state.table.formVisible)

  const clearData = () => { // обнуление фильтрации массива пользователей и value инпута
    dispatch(setUnfilteredData())
    dispatch(setSearchValue(''))
  }

  const formVisible = () => { //изменение состояния отображения формы
    dispatch(setFormVisible(!isVisible))
  }

  return (
    <div className={styles.wrapper}>
      <Link to="/" className={styles.link}>
        <button className={styles.button}>Вернуться к выбору</button>
      </Link>
      <button className={!isVisible ? styles.button : styles.buttonClose} onClick={() => { formVisible() }}>{!isVisible ? 'Открыть форму' : 'Закрыть форму'}</button>
      <button className={styles.button} onClick={() => { clearData() }}>Отобразить всех пользователей</button>
    </div >
  )
}