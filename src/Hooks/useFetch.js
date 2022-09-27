import  { useEffect, useState,useReducer } from "react";
import axios from 'axios'
import {characterEpisodes,findMax} from '../Helpers/addData'

/** useFtech.jsx responsible for fetching data from rick and morty API and filter the data currectly **/

const TASK_URL = "https://rickandmortyapi.com/api"

const secondTaskReducer = (state,action) => {
if (action.type === 'SUM_EPISODES'){
    return { 
        abradolf_lincler: characterEpisodes(action.payload[0]),
        arcade_alien: characterEpisodes(action.payload[1]),
        morty_smith: characterEpisodes(action.payload[2]),
        birdperson: characterEpisodes(action.payload[3]),
        mr_meeseeks: characterEpisodes(action.payload[4]),
        
    };
}
if (action.type === 'REMOVE_DUPLICATE'){
    return {
        abradolf_lincler: state.abradolf_lincler,
        arcade_alien: state.arcade_alien,
        morty_smith: [...new Set(state.morty_smith)],
        birdperson: [...new Set(state.birdperson)],
        mr_meeseeks: [...new Set(state.mr_meeseeks)],
    }
}

return {bradolf_lincler: [],arcade_alien: [],morty_smith: [],birdperson: [],mr_meeseeks: []}
}

export const useFetch = (names,evilName) => {

//task 1 state
const [mostEvil, setMostEvil] = useState([]) 
//task 2 Reducer
const [popularityState,dispatchPopularity] = useReducer(secondTaskReducer,{
    bradolf_lincler: [],arcade_alien: [],morty_smith: [],birdperson: [],mr_meeseeks: []
})

const fetchData = async () => {
//General Api call with rick & morty api
const rickandmortyApi = axios.create({baseURL: TASK_URL,})
//task 1
const res = await rickandmortyApi.get('/character', {params: {name: evilName}})  
setMostEvil(findMax(res))
//task 2
const resultArray = await Promise.all(names.map( async(i) => await rickandmortyApi.get('/character', {params: {name: i}})));
const resultArrayData = resultArray.map((character)=>{return character.data}) 
dispatchPopularity({type:'SUM_EPISODES',payload:resultArrayData})
dispatchPopularity({type:'REMOVE_DUPLICATE'})
}

useEffect(() => {
    fetchData()
}, [])

//return statement
// names.filter((name) => {
//     name.toLowerCase().replace(/\s+/g,"_");
//     // console.log(underscoredName)
// // return [name,popularityState.underscoredName?.length]
// })
console.log(names)

    return [mostEvil,
        ["Abradolf Lincler",popularityState.abradolf_lincler?.length],
        ["Arcade Alien",popularityState.arcade_alien?.length],
        ["Morty Smith",popularityState.morty_smith?.length],
        ["Birdperson",popularityState.birdperson?.length],
        ["Mr. Meeseeks",popularityState.mr_meeseeks?.length]
    ];
}