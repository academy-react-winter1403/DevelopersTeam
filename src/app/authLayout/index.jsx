import React from 'react'
import { Outlet } from 'react-router-dom'
import Auth from '../../components/auth'

const AuthLayout = () => {
  return (
    <>
        <Auth/>
        <Outlet />
    </>
  )
}

export default AuthLayout