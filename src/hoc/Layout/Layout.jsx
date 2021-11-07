import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

import { Header } from '../../components/Header/Header'
import { Select } from '../../routes/Select/Select'
import { Table } from '../../routes/Table/Table'

export const Layout = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Select />} />
        <Route path="/Table" element={<Table />} />
        <Route path="*" element={<Navigate to="/" />} /> {/* при переходе на несуществующий адрес происходит redirect на главную страницу */}
      </Routes>
    </BrowserRouter>
  )
}