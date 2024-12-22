import React from 'react'
import Header from '../UI/Header'
import Footer from '../UI/Footer'
import { Outlet } from 'react-router'
const AppLayout = () => {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default AppLayout