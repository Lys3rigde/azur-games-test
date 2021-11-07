import { Button } from '../../components/Button/Button'
import styles from './Select.module.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setData } from '../../store/actions/selectActions'
import { setIsFetching } from '../../store/actions/tableActions'

export const Select = () => {

  const dispatch = useDispatch()

  const setSmallData = () => { //функция указаания размера данных, для конкретного запроса к серверу
    dispatch(setData('small'))
    dispatch(setIsFetching())
  }

  const setBigData = () => { // функция аналогичная setSmallData
    dispatch(setData('big'))
    dispatch(setIsFetching())
  }

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header}>Помни, я лишь предлагаю узнать правду, больше ничего.</h2>
      <div className={styles.buttonsWrapper}>
        <Link to="/Table" onClick={() => setSmallData()}><Button color={'red'}>Малый объём данных</Button></Link>
        <Link to="/Table" onClick={() => setBigData()}><Button color={'blue'}>Большой объём данных</Button></Link>
      </div>
    </div >)

}
