import React from 'react';
import PropTypes from 'prop-types';
import styles from './Layout.module.css';

import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
export default function Layout({userData ,setuserData})  {
  let navigate = useNavigate()
  function logout(){
      localStorage.removeItem('userToken');
      setuserData(null);
      navigate('/Login')
     }
    return <>
  <Navbar logout={logout} userData={userData} />
  <div className='container py-5'>
  <Outlet></Outlet>
  </div>
    
    </>
}

 
