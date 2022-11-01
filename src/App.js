import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Apropos from './pages/Apropos'
import FicheLogement from './pages/FicheLogement'
import Page404 from './pages/Page404'

import Home from './pages/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/logement_:id" element={<FicheLogement />} />

        <Route path="/about" element={<Apropos />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
