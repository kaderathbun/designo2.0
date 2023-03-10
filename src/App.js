import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// styles
import './App.scss'

// componets
import Header from './components/Header/Header'

// pages
import Home from './pages/Home/Home'
import WebDesign from './pages/WebDesign/WebDesign'
import AppDesign from './pages/AppDesign/AppDesign'
import GraphicDesign from './pages/GraphicDesign/GraphicDesign'
import About from './pages/About/About'
import Locations from './pages/Locations/Locations'
import Contact from './pages/Contact/Contact'
import Error from './pages/Error/Error'

// utils
import ScrollToTop from './utils/ScrollToTop'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route index={true} path="/" element={<Home />} />
          <Route path="/web-design" element={<WebDesign />} />
          <Route path="/app-design" element={<AppDesign />} />
          <Route path="/graphic-design" element={<GraphicDesign />} />
          <Route path="/about" element={<About />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
