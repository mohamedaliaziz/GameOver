import axios from "axios";
import jwtDecode from "jwt-decode";
import { createContext, useState } from "react"
import App from '../App';



export let container = createContext()

const options = {
    
    headers: {
        'X-RapidAPI-Key':'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
}
export function Containerprovider(props) {

    function getAllGames() {
        return axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games`, options)   
         .then((response) => response)
        .catch((error) => error)

            
    }
     function getplatform(item) {
        return axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${item}`, options)   
         .then((response) => response)
        .catch((error) => error)

            
    }
     function getsortby(item) {
        return axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=${item}`, options)   
         .then((response) => response)
        .catch((error) => error)

            
    }
     function getcategory(item) {
        return axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${item}`, options)   
         .then((response) => response)
        .catch((error) => error)

            
    }
     function getItemsHome() {
        return axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games`, options)   
         .then((response) => response)
        .catch((error) => error)

            
    }
     function DatailsGames(id) {
        // console.log(id)
        return axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)   
         .then((response) => response)
        .catch((error) => error)

            
    }

    return <>
        <container.Provider value={{ getItemsHome,DatailsGames,getcategory,getAllGames,getplatform , getsortby}}>

            {props.children}
        </container.Provider>

    </>
}