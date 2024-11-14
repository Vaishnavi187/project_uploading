import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import RecepieList from './components/RecepieList';
import RecepieDetails from './components/RecepieDetails';
import Navbar from './components/Navbar';
import Home from './components/Home';




const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
     
      <Route path='/recipe' element={<RecepieList/>}/>
      <Route path='/recipe/:id' element={<RecepieDetails/>}/>


    </Routes>
    
    </BrowserRouter>
      
    </>
  )
}

export default App
