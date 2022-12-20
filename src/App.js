import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// styles
import './App.scss'

// componets
import Header from './components/Header/Header'

// pages
import Home from './pages/Home/Home'
import WebDesign from './pages/WebDesign/WebDesign'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index={true} path="/" element={<Home />} />
          <Route path="/web-design" element={<WebDesign />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
