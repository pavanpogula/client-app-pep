import { useLocation, Navigate, Outlet } from "react-router-dom"

import React from 'react'
import { useAppSelector } from "../../features/app/hooks"

const RequireAuth = () => {
    
    const {uid ,loading}= useAppSelector(state=>state.user.loggedStatus)
    
    const location = useLocation()

    return (
        ( uid!==null) ?<Outlet/>:
       <Navigate to='/login' state={{from:location}} replace/>
        
    )
}
export default RequireAuth