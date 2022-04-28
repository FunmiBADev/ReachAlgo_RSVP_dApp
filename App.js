import React from 'react'
import './App.css'
import AppNavBar from './components/Navbar/AppNavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages'
import Create from './pages/create'
import Checkin from './pages/checkin'
import Contact from './pages/guest'
import SignUp from './pages/signup'

// export const stdlib = loadStdlib(process.env)
// stdlib.setWalletFallback(
//   stdlib.walletFallback({
//     providerEnv: 'TestNet',
//     MyAlgoConnect
//   })
// )
// const { standardUnit } = stdlib
// export const defaultPrice = '20'
// export const defaultDeadline = '50'

const App = () => {
  return (
    <Router>
      <AppNavBar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/checkin' element={<Checkin />} />
        <Route path='/guest' element={<Contact />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    </Router>
  )
}

export default App
