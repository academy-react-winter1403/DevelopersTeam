import React from 'react'
import ForgetPassword from '../../components/forgetPassword'
import { Outlet } from 'react-router-dom'

const ForgetPassLayout = () => {
  return (
    <div>
        <ForgetPassword />
        <Outlet/>
    </div>
  )
}

export default ForgetPassLayout