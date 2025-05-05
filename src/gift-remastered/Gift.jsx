import { Routes, Route, BrowserRouter } from 'react-router-dom'
import HomePage from './layouts/Home'

import './custom.css'

export default function GiftRemastered() {
  return (
    <BrowserRouter basename='/gift'>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}