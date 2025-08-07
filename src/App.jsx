
import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer'
import Home from './pages/Home'
import Aboutus from './pages/Aboutus'
import NotFound from './pages/NotFound'
import Signup from './pages/Signup'

function App() {


  return (
    
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<Aboutus/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='*' element={<NotFound/>}/>
    
      </Routes>
  )
}

export default App
