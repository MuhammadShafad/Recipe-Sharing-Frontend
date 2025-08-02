import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Recepie from './pages/Recepie'
import Add from './pages/Add'
import Footer from './components/Footer'
import Favorite from './pages/Favorite'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/recepie' element={<Recepie/>}/>
      <Route path='/add' element={<Add/>}/>
      <Route path='/favorite' element={<Favorite/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
