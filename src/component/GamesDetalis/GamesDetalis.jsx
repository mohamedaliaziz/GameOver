import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './GamesDetalis.module.css';
import { container } from './../../context/containerContext';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';

export default function GamesDetalis() {
    const [loding, setloding] = useState(false);
    const [getDatailsGames, setgetDatailsGames] = useState(null);
    let params = useParams()

    let { DatailsGames } = useContext(container)
    
    async function getDatails(id) {
        setloding(true)
        let response = await DatailsGames(id);
        setgetDatailsGames(response?.data)
        setloding(false)
    }
    // console.log(getDatailsGames?.screenshots[1].image)
    useEffect(function () {

        getDatails(params.id)
    },[])
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        arrows:false

    };
    return <>

  {loding?<div className='loding   d-flex align-items-center justify-content-center '>
    <span class="loader"></span>
    </div>:null}
        <div key={getDatailsGames?.id} className='row'>
            <div className='col-md-4 '>
                <img className='w-100' src={getDatailsGames?.thumbnail} alt="" />
                <div className='d-flex justify-content-between algin-item-center mt-4'>
                    <div className='btn bg-mian '>Free</div>
                    <a href={getDatailsGames?.freetogame_profile_url} className='btn bg-info text-white px-5'>PLAY NOW <i class="fas fa-sign-out-alt"></i></a>
                </div>
            </div>
            <div className='col-md-8 text-white'>
                <h2>{getDatailsGames?.title}</h2>
                <h5> About : {getDatailsGames?.title}</h5>
                <p>{getDatailsGames?.description}</p>
                <h4>Minimum System Requirements</h4>
                <p>os : <span>{getDatailsGames?.minimum_system_requirements?.os}</span></p>
                <p> processor: <span>{getDatailsGames?.minimum_system_requirements?.processor}</span></p>
                <p> memory: <span>{getDatailsGames?.minimum_system_requirements?.memory}</span></p>
                <p>graphics : <span>{getDatailsGames?.minimum_system_requirements?.graphics}</span></p>
                <p> storage: <span>{getDatailsGames?.minimum_system_requirements?.storage}</span></p>
                <h4> Screenshots</h4>
                <div>
                    <Slider {...settings}>

                    {getDatailsGames?.screenshots?.map((img )=> <img className='w-100' src={img?.image} alt=""  />)}
                    </Slider>
                </div>
                <h4 className='my-4'>Additional Information</h4>
                <div className='row'>
                    <div className='col-md-4'>
                        <p>Title</p>
                        <h6 className='mb-5'>{getDatailsGames?.title}</h6>
                        <p>Developer</p>
                        <h6 className=''>{getDatailsGames?.developer}</h6>
                    </div>
                    <div className='col-md-4'>
                        <p>Publisher</p>
                        <h6 className='mb-5'>{getDatailsGames?.publisher}</h6>
                        <p>Release Date</p>
                        <h6 className=''>{getDatailsGames?.release_date}</h6>
                    </div>
                    <div className='col-md-4'>
                        <p>Genre</p>
                        <h6 className='mb-5'>{getDatailsGames?.genre}</h6>
                        <p>Platform</p>
                        <h6 className=''>{getDatailsGames?.platform}</h6>
                    </div>
                </div>

            </div>
        </div>

    </>
}


