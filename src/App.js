import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, createHashRouter, Navigate, RouterProvider } from 'react-router-dom';
import Layout from './component/Layout/Layout';
import jwtDecode from "jwt-decode";
import Home from './component/Home/Home';
import Categories from './component/Categories/Categories';
import AllGames from './component/AllGames/AllGames';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import SortBy from './component/Sort-by/Sort-by';
import Platforms from './component/Platforms/Platforms';
import { useContext, useEffect, useState } from 'react';

import { container, Containerprovider } from './context/containerContext';
import GamingRoute from './component/GamasRoute/GamingRoute';
import GamesDetalis from './component/GamesDetalis/GamesDetalis';
import NotFound from './component/NotFound/NotFound.jsx';

function App() {
  const [userData, setuserData] = useState(null);
  function saveUserData(){
    
  let encodedtoken = localStorage.getItem('userToken');
  // console.log(encodedtoken);
  let decodeToken = jwtDecode(encodedtoken);
  // console.log(decodeToken);
  setuserData(decodeToken)
  }
  // let {saveUserData} = useContext(container)
useEffect(()=>{

if(localStorage.getItem('userToken') !== null){
  saveUserData()
}

},[])









  let routers = createHashRouter([
    {psth: '', element: <Layout setuserData={setuserData} userData={userData} />, children: [
      { index: true, element:<GamingRoute><Home /></GamingRoute>  },
      { path: 'cataeories/:item', element: <GamingRoute><Categories /></GamingRoute> },
      { path: 'allGames', element:<GamingRoute><AllGames /></GamingRoute> },
      { path: 'sortby/:item', element: <GamingRoute><SortBy /></GamingRoute> },
      { path: 'platforms/:item', element: <GamingRoute><Platforms /></GamingRoute> },
      { path: 'gamesDetalis/:id', element: <GamingRoute><GamesDetalis /></GamingRoute> },
      { path: 'login', element: <Login  saveUserData={saveUserData} /> },
      { path: 'register', element: <Register /> },
      { path: '*', element: <NotFound /> },
      


    ]}

  ])
  return <>

<Containerprovider>
<RouterProvider router={routers}></RouterProvider>
</Containerprovider>

  </>
}

export default App;
