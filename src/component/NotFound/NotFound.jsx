import React from 'react';
import PropTypes from 'prop-types';
import styles from './NotFound.module.css';
import { Link } from 'react-router-dom';

export default function NotFound()  {
    function ay7ga(){
        alert('ياعم عيب عليك خليك معانا')
    } 
    return <>
    
    
    <section className={styles.notFound}>
        <div calssName={styles.img}>
        <img src="https://assets.codepen.io/5647096/backToTheHomepage.png" alt="Back to the Homepage"/>
        <img src="https://assets.codepen.io/5647096/Delorean.png" alt="El Delorean, El Doc y Marti McFly"/>
        </div>
        <div calssName={styles.text}>
        <h1>404</h1>
        <h2>PAGE NOT FOUND</h2>
        <h3>BACK TO HOME?</h3>
        <Link to="allGames" calssName="yes btn btn-info">YES</Link>
        <button calssName='btn btn-danger' onClick={()=>{
            ay7ga()
        }}>NO</button>
        </div>
    </section>

    
    </>
}

 
