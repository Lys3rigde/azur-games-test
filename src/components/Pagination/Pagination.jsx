import { useSelector } from 'react-redux'
import './Pagination.css'

export const Pagination = ({ pages, onCurrentPage, onPrevPage, onNextPage }) => {

  const currentPage = useSelector(state => state.table.currentPage)
  const currentPageActive = useSelector(state => state.table.currentPageActive)
  const btnNextDisabled = useSelector(state => state.table.btnNextDisabled)
  const btnPrevDisabled = useSelector(state => state.table.btnPrevDisabled)

  return (
    <nav aria-label="..." className="pagination-wrapper">
      <ul className="pagination">
        <li className={`${btnPrevDisabled} page-item`}>
          <button className="page-link" onClick={() => { onPrevPage() }}>Previous</button>
        </li>
        {
          pages.map(page => {
            return (
              <li className={currentPage === page ? `${currentPageActive} page-item` : 'page-item'} key={page}>
                <button className="page-link" onClick={() => { onCurrentPage(page) }}>
                  {page}
                </button>
              </li>
            )
          })
        }
        <li className={`${btnNextDisabled} page-item`}>
          <button className="page-link" onClick={() => { onNextPage() }}>Next</button>
        </li>
      </ul>
    </nav >
  )
}