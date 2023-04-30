import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Login.module.css';
import { useFormik, validationSchema } from 'formik';
import img from '../../images/gaming.ebaf2ffc84f4451d.jpg'
import { Link, useNavigate, } from 'react-router-dom';
import axios from 'axios';
import * as Yup from 'yup';
import logo from'../../images/logo/logo.png'
import { container } from '../../context/containerContext';


export default function Login({saveUserData}) {
  
    let navigate = useNavigate()
    const [loding, setloding] = useState(false);
    const [error, seterror] = useState(true);
    async function handleLogin(values) {
        setloding(true)
        let { data } = await axios.post(`https://route-ecommerce.onrender.com/api/v1/auth/signin`, values).catch((err)=>{
            setloding(false)
            seterror(` ${err.response.data.message}`)
            
        })

        
        if (data.message == 'success') {
            localStorage.setItem('userToken' , data.token)
            saveUserData()
            setloding(false)
            navigate('/')

        }
        console.log(data);
    }

    let validationSchema = Yup.object({
        email: Yup.string().required('email is required').email('email is invalid'),
        password: Yup.string().required('password is required').matches(/^[A-z][a-z0-9]{5,10}$/, 'password must start with uppercase'),

    })
    let alertt = ()=> alert('ضحكت عليك انا كمان ههه اعمل اكونت جديد بقي')
    let formik = useFormik({
        initialValues: {

           
            email: "",
            password: "",
  

        },
        validationSchema,
        onSubmit: handleLogin,
    })

    return <>
        <div className='row bg-mian'>
            <div className='col-md-6 p-0  d-lg-block d-none'>

                <img className='w-100 h-100 ' src={img} alt="" />

            </div>
            <div className='col-lg-6  text-center py-5'>
<img className='w-25' src={logo} alt="" />
                <h2 className='mb-3'> Log in to GameOver</h2>
                {error.length > 0?<div className="alert alert-danger">{error}</div>:null}
                <form className='border-b ' onSubmit={formik.handleSubmit} >



          
                    <input placeholder='Email Address' type="email" id='email' name='email' className='form-control mb-3' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.errors.email && formik.touched.email ? <div className='alert alert-danger '>{formik.errors.email}</div> : null}

     

                    <input placeholder='password' type="password" id='password' name='password' className='form-control mb-3' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.errors.password && formik.touched.password ? <div className='alert alert-danger '>{formik.errors.password}</div> : null}


                    {loding == false ? <button type='submit' className='btn bg-dark w-100 text-white mb-3'>Login</button>
                        : <button className='btn bg-dark w-100 text-white mb-3'> <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span></button>
                    }
                </form>
                <a onClick={alertt} className='main-color cursor-pointer'>Forgot Password?</a>
                <div className='text-white'>Not a member yet? <Link  to='/register' className='main-color cursor-pointer'>Create Account{'>'} </Link></div>
            </div>
        </div>

    </>
}


