import React from 'react'
import HeaderHome from '../../Components/HomeHeader/HeaderHome'
import {Outlet} from 'react-router-dom'

const HomeTemplate = () => {
  return (
    <>
        <HeaderHome className='bg-dark text-white text-center p-3'>
            Header
        </HeaderHome>
        <div style={{minHeight: '85vh'}}>
            <Outlet />
        </div>
        <footer className='bg-dark text-white text-center p-3'>
            Footer
        </footer>
    </>
  )
}

export default HomeTemplate