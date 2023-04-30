import React from 'react';
import PropTypes from 'prop-types';

import { Navigate } from 'react-router-dom';

export default function GamingRoute(props)  {


    if(localStorage.getItem('userToken')==null){
      return  <Navigate to={'/login'} />
    }else{
        return props.children
    }
    return <>
    
    
    </>
}

 
