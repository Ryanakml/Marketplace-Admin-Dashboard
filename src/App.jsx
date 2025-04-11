import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import ProductPage from './pages/ProductPage'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <div className="bg-blue-500" style={{backgroundColor: 'blue', minHeight: '100vh'}}>
        <div className="bg-red-500 p-4 text-white" style={{backgroundColor: 'red', padding: '16px', color: 'white'}}>
          Tailwind Test Header
        </div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/products" element={<ProductPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
