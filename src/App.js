import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Apropos from './pages/Apropos'
import FicheLogement from './pages/FicheLogement'

import Home from './pages/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement_:id" element={<FicheLogement />} />

        <Route path="/about" element={<Apropos />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
