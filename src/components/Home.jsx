import React, { useEffect, useState } from 'react'
import PopularMeals from './PopularMeals';
import TrendingMeals from './TrendingMeals';


const Home = () => {
 
  return (
    <>
    <PopularMeals/>
    <TrendingMeals/>
    </>
  )
}

export default Home
