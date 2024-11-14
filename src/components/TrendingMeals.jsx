import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';

const TrendingMeals = () => {
    const[food,setFood]=useState([]);
    const fetchfood=async()=>{

        let response=await fetch(` https://www.themealdb.com/api/json/v1/1/filter.php?c=dessert `)
        let data=await response.json();
        setFood(data.meals);
      }
      useEffect(()=>{
        
        if(food)
          fetchfood(food);
  
      },[food])

      const settings1 = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 0,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true,
             
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
              centerPadding:"35px"

            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              initialSlide: 2,
              centerPadding:"35px"
               
            }
          },
          {
            breakpoint:500 ,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              centerPadding:"35px"
            }
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              centerPadding:"35px"
            }
          }
        ]

   
    
        };


      
  return (
    <>
      <div className='min-w-full'>
<div className='mt-10 w-11/12 ml-16 '>
    <h1 className='text-center font-bold text-lg mt-10  border-b-2 sm:text-xl md:text-3xl'>TRENDING DESSERTS </h1>
<Slider {...settings1}>
{food.map((foodie)=>(
  <div key={foodie.idMeal} >
    <Link to={`/recipe/${foodie.idMeal}`}>
<img src={foodie.strMealThumb}   className='mt-10 h-48 transition-all duration-100 hover:scale-110 border-4 ' style={{margin:'0 10px'}}/>
<h2 className=' ml-1.5 text-xl font-bold '>{foodie.strMeal}</h2> 
</Link>
  </div>
))}


</Slider>

</div>
</div>
    </>
  )
}

export default TrendingMeals
