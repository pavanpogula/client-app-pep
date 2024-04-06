
import React, {  useEffect } from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from './features/app/hooks';
import { getAuth } from './features/user/userSlice';
import RequireAuth from './components/public/RequireAuth';

import Pure from './components/login/Pure';
import { useNavigate, Outlet, useLocation, Navigate } from "react-router-dom";

function App() {
  const dispatch = useAppDispatch();
  const { uid,  } = useAppSelector(state => state.user.loggedStatus)
 
  const naviagte = useNavigate();
  useEffect(() => {
    if (uid !== 'xe40x' && uid !== null) {
      naviagte('/Dashboard')
    }
  }, [uid])
  useEffect(() => {
    console.log('uid',uid)
    if (uid === 'xe40x'){
      dispatch(getAuth())
    }
  }, [])


  const location = useLocation()

  return (
    <Routes>
      <Route path='/' element={<Outlet />}>
        <Route index Component={() => ((uid !== 'xe40x' && uid !== null) ? <Navigate to='/Dashboard' state={{ from: location }} replace /> : <Pure />)} />
        {/* //protected route */}
        <Route path='/login' Component={() => ((uid !== 'xe40x' && uid !== null) ? <Navigate to='/Dashboard' state={{ from: location }} replace /> : <Pure />)} />

        <Route element={<RequireAuth />}>
          <Route path='/Dashboard' element={<><h1>hello</h1></>} />
        </Route>
      </Route>


    </Routes>
  );
}

export default App;
