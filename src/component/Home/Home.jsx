import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import { container } from '../../context/containerContext';


export default function Home() {
    const [loding, setloding] = useState(false);
    const [itemshome, setitemshome] = useState([]);
    let { getItemsHome } = useContext(container);
    async function itemsHome() {
        setloding(true)
        let response = await getItemsHome()
        setitemshome(response?.data)
        // console.log(response.data[365])
        setloding(false)
    }
  useEffect(()=>{
    itemsHome()
  },[])
    return <>
        <div  key={itemshome?.id}>
            <div className='img-bg mb-5'>
                <h2 className='title'>Find & track the best <span className='main-color h2'>free-to-play</span> games!</h2>
                <p className='text-muted my-5'>Track what you've played and search for what to play next! Plus get free premium loot!</p>
                <Link to='/allGames'><button type="button" class="btn btn-outline-secondary px-4">Secondary</button></Link>
            </div>
            <div className='d-flex text-secondary'>
                <i class="fas fa-robot mr-2 fs-3"></i>
                <h3>Personalized Recommendations</h3>
            </div>
            <div className='row my-4'>

            {loding?<div className='col-4'><span className={styles.loaderr}></span></div>:null}
        {loding?<div className='col-4'><div className={styles.loaderr}></div></div>:null}
        {loding?<div className='col-4'><div className={styles.loaderr}></div></div>:null}
                <div className='col-md-4'>
                    <Link to={`/gamesDetalis/${itemshome[1]?.id}`}>
                        <div className='card bg-secondary' >
                            <img className='w-100 card-img-top' src={itemshome[1]?.thumbnail} alt="" />
                            <div className='card-body'>
                                <div className='d-flex justify-content-between align-items-center '>
                                    <h4 className='h6 card-title '>{itemshome[1]?.title}</h4>
                                    <span className='badge bg-info py-2 px-2 '>free</span>

                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='col-md-4'>
                    <Link to={`/gamesDetalis/${itemshome[2]?.id}`}>
                        <div className='card bg-secondary' >
                            <img className='w-100 card-img-top' src={itemshome[2]?.thumbnail} alt="" />
                            <div className='card-body'>
                                <div className='d-flex justify-content-between align-items-center '>
                                    <h4 className='h6 card-title '>{itemshome[2]?.title}</h4>
                                    <span className='badge bg-info py-2 px-2 '>free</span>

                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='col-md-4'>
                    <Link to={`/gamesDetalis/${itemshome[3]?.id}`}>
                        <div className='card bg-secondary' >
                            <img className='w-100 card-img-top' src={itemshome[3]?.thumbnail} alt="" />
                            <div className='card-body'>
                                <div className='d-flex justify-content-between align-items-center '>
                                    <h4 className='h6 card-title '>{itemshome[3]?.title}</h4>
                                    <span className='badge bg-info py-2 px-2 '>free</span>

                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </>
}


