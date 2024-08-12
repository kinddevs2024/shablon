import React from 'react'
import {  } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Loyaout = ({children}) => {
  return (
    <>
    <Header/>
    {children}
    <Footer/>
    </>
  )
}

export default Loyaout