import React from 'react'
import { Outlet } from 'react-router-dom'
import {useLocation} from 'react-router-dom'
const Layout = () => {
   // const uid :string|null|'xe041'= useAppSelector(state=>state.user.uid)
    
    const location = useLocation()

    return (
      <Outlet/>
      
        
    )
    }
export default Layout