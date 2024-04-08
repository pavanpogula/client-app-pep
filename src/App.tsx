
import  {  useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from './features/app/hooks';
import { getAuth } from './features/user/userSlice';
import RequireAuth from './components/public/RequireAuth';

import Pure from './components/login/Pure';
import { useNavigate, Outlet, useLocation, Navigate } from "react-router-dom";


import DashboardLayout from './components/dashboard';

import MainDashboard from './components/mainDashboard/Pure';
import NotFoundView from './components/pageNotFound/NotFoundPage';
import About from './components/about/About';
import Profile from './components/profile/Profile';

function App() {
  const appendUrl = process.env['REACT_APP_URL']
  const dispatch = useAppDispatch();
  const { uid,  } = useAppSelector(state => state.user.loggedStatus)
 
  const naviagte = useNavigate();
  useEffect(() => {
    if (uid !== 'xe40x' && uid !== null) {
      naviagte('/dashboard')
    }else{
      naviagte('/login')
    }
  }, [uid])
  useEffect(() => {

    if (uid === 'xe40x'){
      dispatch(getAuth())
    }
  }, [])


  const location = useLocation()

  return (
 
    <Routes>
      
      <Route path={appendUrl+'/'} element={<Outlet />}>

      <Route path="*" element={<NotFoundView />}/>

     

        <Route index Component={() => ((uid !== 'xe40x' && uid !== null) ? <Navigate to={appendUrl+'/dashboard'} state={{ from: location }} replace /> : <Pure />)} />
        {/* //protected route */}
        <Route path={appendUrl+'/login'} Component={() => ((uid !== 'xe40x' && uid !== null) ? <Navigate to={appendUrl+'/dashboard'} state={{ from: location }} replace /> : <Pure />)} />
     
        <Route element={<RequireAuth />}>
          <Route path={appendUrl+'/dashboard'} element={<DashboardLayout>
<MainDashboard/>

  </DashboardLayout>} />
  <Route path={appendUrl+'/about'} element={<DashboardLayout>
<About/>

  </DashboardLayout>} />

  <Route path={appendUrl+'/user'} element={<DashboardLayout>
<Profile/>

  </DashboardLayout>} />
        </Route>
      </Route>


    </Routes>
  );
}

export default App;
