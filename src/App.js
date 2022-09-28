import FirstTask from './Components/FirstTask'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import { useFetch } from '../src/Hooks/useFetch'
import { Route, Navigate, Routes } from 'react-router-dom';
import SecondTask from './Components/SecondTask'
import NotFound from './Components/NotFound'
import { useEffect,useRef } from 'react';

function App() {

//fetch data from rick and morty API
let names = ["Abradolf Lincler","Arcade Alien","Morty Smith","Birdperson","Mr. Meeseeks"]
const firstRender = useRef(true);
const fetchedData = useFetch(names,"Evil");

useEffect(()=>{
  if(fetchedData){
    if (firstRender.current) {firstRender.current = false;} 
  }
},[fetchedData])
 
  return (
    <>
    <Navbar/>
    <Routes>
          <Route path='/' element={<Navigate replace to="home" />} />
          <Route path='/home' element={<Home />} />
          {!firstRender.current && <Route path='/FirstTask' element={ fetchedData && <FirstTask fetchedData={fetchedData["task1"]}/>}/>}
          {!firstRender.current && <Route path='/SecondTask' element={ fetchedData && <SecondTask fetchedData={fetchedData["task2"]}/>} />}
          <Route path='*' element={<NotFound />} />
        </Routes>
    </>
    
  );
}

export default App;
