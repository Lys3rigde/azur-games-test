
import { useDispatch, useSelector } from 'react-redux'
import { setSearchValue, setFilteredData } from '../../store/actions/tableActions'

import styles from './Search.module.css'

export const Search = ({ filterData }) => {

  const dispatch = useDispatch()
  const inputValue = useSelector(state => state.table.searchValue)

  return (
    <div className={styles.search}>
      <input
        value={inputValue}
        type="text"
        placeholder="Enter FirstName/SecondName/Email/Phone"
        className={styles.input}
        onChange={e => { dispatch(setSearchValue(e.target.value)) }}
      />
      <button className={styles.button} onClick={() => { dispatch(setFilteredData(filterData())) }}>Search</button>
    </div>
  )
}