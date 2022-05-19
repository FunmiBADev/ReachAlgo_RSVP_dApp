import React from 'react'
import './App.css'
import AppNavBar from './components/Navbar/AppNavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CloseEvent from './pages/close'
import Guest from './pages/guest'
import Create from './pages/create'
import Checkin from './pages/checkin'

const App = () => {
  return (
    <div>
      <Router>
        <AppNavBar />
        <Routes>
          <Route path='/' exact element={<Create />} />
          <Route path='/checkin' element={<Checkin />} />
          <Route path='/guest' element={<Guest />} />
          <Route path='/close' element={<CloseEvent />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
