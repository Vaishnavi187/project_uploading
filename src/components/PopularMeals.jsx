import React from 'react'
import { useState,useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';


const PopularMeals = () => {
    const[recipeSlider,setRecipeSlider]=useState([]);

    const fetchrecipe=async()=>{

        const response=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian`)
        const data=await response.json();
        setRecipeSlider(data.meals);
        console.log(data);
  
      }
      useEffect(()=>{
  
        if(recipeSlider)
          fetchrecipe(recipeSlider)
      },[recipeSlider])

      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]


        
      };
  return (
    <>
    <div className='min-w-full overflow-hidden'>
       <div className='  w-full  sm:w-full  h-full  overflow-hidden '>
    <h1 className='text-center font-bold md:text-3xl text-lg sm:xl border-b-2 mt-4 '>POPULAR MEALS</h1>    

  <Slider {...settings}>

    {recipeSlider.map((slide)=>(

      <div key={slide.idMeal} >
  <Link to={`/recipe/${slide.idMeal}`}>
        <img src={slide.strMealThumb} className='mt-10 h-56 sm:ml-10 transition-all duration-100 hover:scale-110 border-4 w-full sm:w-5/6  md:w-5/6  overflow-hidden '/> 
        <h2 className=' text-xl font-bold  flex justify-center overflow-hidden '>{slide.strMeal}</h2> 
        </Link>
      </div>
      
    ))}
  </Slider>
</div>
</div>
      
    </>
  )
}

export default PopularMeals
