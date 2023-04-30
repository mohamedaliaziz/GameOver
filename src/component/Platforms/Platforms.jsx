import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Platforms.module.css';
import { container } from '../../context/containerContext';
import { useParams } from 'react-router-dom';

export default function Platforms()  {
const [arraySize, setarraySize] = useState(40);
    let {getplatform }=useContext(container)
let params = useParams()
    const [getplatformitem, setgetplatformitem] = useState([]);
    async function getPlatForm(item) {
        let response = await getplatform(item)
        // console.log(response.data);
        setgetplatformitem(response?.data);

    }
    

let showMoreItems = ()=>{
    setarraySize(arraySize + 40)
}
        getPlatForm(params.item)


    
    return <>
          <div className='row '>
            {getplatformitem?.slice(0,arraySize).map((response) => <div  className='col-md-3'>
                <div className='card game card mb-4 grow shadow'>
                    <div class="game-img">
                        <img className='w-100' src={response.thumbnail} alt="" />
                    </div>
                    <div className='card-body'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h4 className='h6 card-title '>{response.title}</h4>
                        <span className='badge bg-info py-2 px-2 '>free</span>

                    </div>
                    <p class="text-muted">{response.short_description.split(' ').slice(0, 3).join(' ')}</p>
                    <div class="d-flex justify-content-between">
                                <i class="fas fa-plus-square"></i>
                                <div class="d-flex mb-n2 justify-content-between align-items-center">
                                    <span class="badge bg-secondary text-dark  me-2">{response.genre}</span>
                                    <i  class="fab fa-windows text-muted "></i>
                                </div>
                            </div>
                    </div>
                </div>

            </div>)}
            <button className='btn btn-info' onClick={showMoreItems}>More Games </button>

        </div>
    
    </>
}

 
