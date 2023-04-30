import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Register.module.css';
import { useFormik, validationSchema } from 'formik';
import img from '../../images/gaming.ebaf2ffc84f4451d.jpg'
import { Link, useNavigate, } from 'react-router-dom';
import axios from 'axios';
import * as Yup from 'yup';


export default function Register() {
    let navigate = useNavigate()
    const [loding, setloding] = useState(false);
    const [error, seterror] = useState(true);
    async function handleRegister(values) {
        setloding(true)
        let { data } = await axios.post(`https://route-ecommerce.onrender.com/api/v1/auth/signup`, values).catch((err)=>{
            setloding(false)
            seterror(` ${err.response.data.message}`)
            console.log(err);
        })

        
        if (data.message == 'success') {
            // setmessagesuccess(data.message)
            setloding(false)
            navigate('/login')

        }
    }
function navigateLogin(){
    navigate('/login')
}
    let validationSchema = Yup.object({
        name: Yup.string().required('name is required').min(3, 'name minlength is 3').max(20, 'name maxlength is 20'),
        email: Yup.string().required('email is required').email('email is invalid'),
        password: Yup.string().required('password is required').matches(/^[A-z][a-z0-9]{5,10}$/, 'password must start with uppercase'),
        rePassword: Yup.string().required('repassword is required').oneOf([Yup.ref('password')], 'password and repassword dosent'),
        phone: Yup.string().required('phone is required').matches(/^01[1205]{1}[0-9]{8}$/, 'phoem must be valid number'),

    })
    let formik = useFormik({
        initialValues: {

            name: "",
            email: "",
            password: "",
            rePassword: "",
            phone: ""

        },
        validationSchema,
        onSubmit: handleRegister,
    })

    return <>
        <div className='row bg-mian'>
            <div className='col-md-6 p-0  d-lg-block d-none'>

                <img className='w-100 h-100 ' src={img} alt="" />

            </div>
            <div className='col-lg-6  text-center py-5'>
                <h2 className='mb-3'> Create My Account!</h2>
                {error.length > 0?<div className="alert alert-danger">{error}</div>:null}
                <form className='border-b ' onSubmit={formik.handleSubmit} >



                    <input placeholder='Name' type="text" id='name' name='name' className='form-control mb-2 w-100 me-5 bg-dark border-0 text-white' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.errors.name && formik.touched.name ? <div className='alert alert-danger '>{formik.errors.name}</div> : null}


                    <input placeholder='Email Address' type="email" id='email' name='email' className='form-control mb-3' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.errors.email && formik.touched.email ? <div className='alert alert-danger '>{formik.errors.email}</div> : null}

                    <input placeholder='phone' type="tle" id='phone' name='phone' className='form-control mb-2 w-100 bg-dark text-white border-0' value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.errors.phone && formik.touched.phone ? <div className='alert alert-danger '>{formik.errors.phone}</div> : null}


                    <input placeholder='password' type="password" id='password' name='password' className='form-control mb-3' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.errors.password && formik.touched.password ? <div className='alert alert-danger '>{formik.errors.password}</div> : null}

                    <input placeholder='again password' type="password" id='rePassword' name='rePassword' className='form-control mb-3 bg-dark text-white border-0' value={formik.values.rePassword} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.errors.rePassword && formik.touched.rePassword ? <div className='alert alert-danger '>{formik.errors.rePassword}</div> : null}

                    {loding == false ? <button type='submit' className='btn bg-dark w-100 text-white mb-3'>Create Account</button>
                        : <button className='btn bg-dark w-100 text-white mb-3'> <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span></button>
                    }
                </form>
                <div className='text-white'>Already a member? <a onClick={navigateLogin} to='' className='main-color cursor-pointer'>Login</a></div>
            </div>
        </div>

    </>
}


