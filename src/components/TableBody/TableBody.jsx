import { TableRow } from '../TableRow/TableRow'
import { useSelector } from 'react-redux'

export const TableBody = ({ lastRow, firstRow }) => {

  const data = useSelector(state => state.table.filteredData).slice(firstRow, lastRow) // задание списка элементов конкретной страницы
  return (
    <div>
      {
        data.map(e => {
          return <TableRow userInfo={e} key={e.phone} />
        })
      }
    </div>
  )
}