import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from 'react-router'
import { DetailedInfo } from '../../components/DetailedInfo/DetailedInfo'
import { Form } from '../../components/Form/Form'
import { Interactions } from '../../components/Interactions/Interactions'
import { Loader } from '../../components/Loader/Loader'
import { Pagination } from '../../components/Pagination/Pagination'
import { Search } from '../../components/Search/Search'
import { TableBody } from '../../components/TableBody/TableBody'
import { TableHeader } from '../../components/TableHeader/TableHeader'
import { setCurrentPage, setBtnNextDisabled, setBtnPrevDisabled, setSortData } from '../../store/actions/tableActions'
import { fetchUsers } from '../../store/asyncActions/asyncTableActions'
import styles from './Table.module.css'

export const Table = () => {

  const dispatch = useDispatch()
  const dataSize = useSelector(state => state.select.dataSize)
  const isFetching = useSelector(state => state.table.isFetching)
  const showInfo = useSelector(state => state.table.userInfo)
  const maxPages = useSelector(state => state.table.maxPages)
  const currentPage = useSelector(state => state.table.currentPage)
  const filteredData = useSelector(state => state.table.filteredData)
  const data = useSelector(state => state.table.data)
  const searchValue = useSelector(state => state.table.searchValue)
  const isVisible = useSelector(state => state.table.formVisible)
  const [sortDirection, setSortDirection] = useState(true)
  const [arrowDirection, setArrowDirection] = useState('')
  let pages = []
  const maxRows = 50
  const lastRow = currentPage * maxRows
  const firstRow = lastRow - maxRows

  for (let i = 1; i <= maxPages; i++) {
    pages.push(i)
  }

  useEffect(() => { // загрузка пользователей при первом рендере страницы
    dispatch(fetchUsers(dataSize))
  }, [dataSize])

  const onCurrentPage = page => { //функция устанавливает нынешнюю страницу для пагинации 
    dispatch(setCurrentPage(page))
    dispatch(setBtnNextDisabled(''))
    dispatch(setBtnPrevDisabled(''))
    if (page === maxPages) {
      dispatch(setBtnNextDisabled('disabled'))
    } else if (page === 1) {
      dispatch(setBtnPrevDisabled('disabled'))
    }
  }

  const onNextPage = () => { //переход на страницу вперед по кнопке Next
    if (currentPage > maxPages - 1) {
      dispatch(setBtnNextDisabled('disabled'))
      return
    }
    dispatch(setCurrentPage(currentPage + 1))
    dispatch(setBtnPrevDisabled(''))
  }

  const onPrevPage = () => { //переход на страницу назад по кнопке Previous
    if (currentPage < 2) {
      dispatch(setBtnPrevDisabled('disabled'))
      return
    }
    dispatch(setCurrentPage(currentPage - 1))
    dispatch(setBtnNextDisabled(''))
  }

  const sortData = target => { // сортировка массива пользователей 
    const copyData = filteredData.concat()
    let sortedData;
    if (sortDirection) {
      sortedData = copyData.sort((a, b) => { return a[target] > b[target] ? 1 : -1 })
      setArrowDirection('arrow-sort')
    } else {
      sortedData = copyData.reverse((a, b) => { return a[target] > b[target] ? 1 : -1 })
      setArrowDirection('')
    }
    dispatch(setSortData(sortedData))
    setSortDirection(!sortDirection)
  }

  const filterData = () => { // фильтрация массива пользователей по firstName || lastName || phone || email
    if (!searchValue) {
      return data
    }
    return data.filter(
      el => {
        return el.firstName.toLowerCase().includes(searchValue.toLowerCase())
          || el.lastName.toLowerCase().includes(searchValue.toLowerCase())
          || el.email.toLowerCase().includes(searchValue.toLowerCase())
          || el.phone.toLowerCase().includes(searchValue.toLowerCase());
      }
    )
  }



  return (
    !dataSize
      ? <Navigate to="/" /> //при прямом переходе по ссылке redirect на главную
      : isFetching
        ? <Loader /> // loader при загрузке данных
        : (
          <div className={styles.wrapper}>
            <Interactions /> {/* компонент кнопок взаимодействия*/}
            {
              isVisible ? <Form /> : null // отрисовка формы добавления юзера при нажатии на кнопку в Interactions
            }
            <Search filterData={filterData} /> {/* компонент поиска по юзерам */}
            <TableHeader sortData={sortData} arrowDirection={arrowDirection} /> {/* тайтл таблицы */}
            <TableBody lastRow={lastRow} firstRow={firstRow} /> {/*тело таблицы*/}
            {
              maxPages > 1
                ? <Pagination //компонент пагинации, отрисовывается только при >50 элементов
                  pages={pages}
                  onCurrentPage={onCurrentPage}
                  onNextPage={onNextPage}
                  onPrevPage={onPrevPage}
                />
                : null
            }
            {
              showInfo ? <DetailedInfo /> : null //компонент подробной инф-и о пользователе, отрисовывается при нажатии на строку юзера в таблице
            }
          </div>
        )
  )
}