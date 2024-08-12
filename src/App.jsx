import {  } from 'react'
import { Route, Routes ,  } from 'react-router-dom'
import './App.css'
import Loyaout from './Layout/Loyaout'
import Home from './pages/Home/Home'
import Aboute from './pages/About/Aboute'

function App() {

  return (
    <>
    <Loyaout>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={ <Aboute/>}/>
      </Routes>
    </Loyaout>
    </>
  )
}

export default App
