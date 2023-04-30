import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo/logo.png'

export default function Navbar({ userData, logout }) {
    return <>
        <nav className="navbar navbar-expand-md navbar-light bg-light bg-color shadow-lg">
            <div className="container">
                <Link className="navbar-brand text-white" to="/"><img className={styles.logo} src={logo} alt="" />  Game Over</Link>
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    {userData !== null ? <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/" aria-current="page">Home <span className="visually-hidden">(current)</span></Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="allGames">All</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="platforms" id="platforms" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Platforms</Link>
                            <div className="dropdown-menu" aria-labelledby="platforms">
                                <Link  className="dropdown-item" to="platforms/pc"> pc</Link>
                                <Link  className="dropdown-item" to="platforms/browser"> browser</Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="sortby" id="sortby" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">sort-by</Link>
                            <div className="dropdown-menu" aria-labelledby="sortby">
                                <Link className="dropdown-item" to="/sortby/release-date"> release-date</Link>
                                <Link className="dropdown-item" to="sortby/alphabetical"> alphabetical</Link>
                                <Link className="dropdown-item" to="sortby/relevance"> relevance</Link>
                                <Link className="dropdown-item" to="sortby/popularity">  popularity </Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="cataeories" id="cataeories" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">cataeories</Link>
                            <div className="dropdown-menu" aria-labelledby="cataeories">
                                <Link className="dropdown-item" to="cataeories/racing"> racing</Link>
                                <Link className="dropdown-item" to="cataeories/sports"> sports</Link>
                                <Link className="dropdown-item" to="cataeories/social"> social</Link>
                                <Link className="dropdown-item" to="cataeories/shooter"> shooter</Link>
                                <Link className="dropdown-item" to="cataeories/open-world"> open-world</Link>
                                <Link className="dropdown-item" to="cataeories/zombie"> zombie</Link>
                                <Link className="dropdown-item" to="cataeories/fantasy"> fantasy</Link>
                                <Link className="dropdown-item" to="cataeories/action-rpg"> action-rpg</Link>
                                <Link className="dropdown-item" to="cataeories/flight"> flight</Link>
                                <Link className="dropdown-item" to="cataeories/battle-royale"> battle-royale</Link>
                            </div>
                        </li>
                    </ul> : null}

                    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">

                        {userData == null ? <>                        <li className="nav-item">
                            <Link className="nav-link" to="Login">Login</Link>
                        </li>

                            <li className="nav-item">
                                <Link className="nav-link  btn border-btn  main-color " to="Register">join Free</Link>
                            </li></> : <li className="nav-item">
                            <span onClick={logout} className="cursor-pointer text-info nav-link " >SignOut</span>
                        </li>}










                    </ul>

                </div>
            </div>
        </nav>


    </>
}


