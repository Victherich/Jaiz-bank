
import React, { useContext, useState } from 'react'

// import Outlet from "react-router-dom"
import { Navigate,Outlet } from 'react-router-dom'
import { Context } from './Context'
import { useSelector } from 'react-redux'

const PrivateUserDashboard = () => {
   
   const userToken = useSelector(state=>state.userToken)
console.log(userToken)
    
  return (
   userToken?<Outlet/>:<Navigate to="/investments"/>
  )
}

export default PrivateUserDashboard
