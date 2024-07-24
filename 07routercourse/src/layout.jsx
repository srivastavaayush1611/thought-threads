import React from 'react'
import Header from './components/header/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
        <Header/>
        <Outlet/>  //here u can do changes
        <Footer/>
        </>
    )
}

export default Layout
