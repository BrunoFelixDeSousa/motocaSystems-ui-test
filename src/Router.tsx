import { Routes, Route } from 'react-router-dom'

import { ListMotorcycle } from './pages/ListMotorcycle'
import { EditMotorcycle } from './pages/EditMotorcycle'
import { RegisterMotorcycle } from './pages/RegisterMotorcycle'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<ListMotorcycle />} />
      {/* <Route path="/editar" element={<EditMotorcycle />} /> */}
      <Route path="/editar/:id" element={<EditMotorcycle />} />
      <Route path="/registrar" element={<RegisterMotorcycle />} />
    </Routes>
  )
}
