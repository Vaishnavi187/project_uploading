import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {useNavigate, useParams} from 'react-router-dom'
import TrendingMeals from './TrendingMeals';


const RecepieDetails = () => {

    const {id }=useParams();
    const[recipeitems,setRecipeItems]=useState("");
  

    const fetchDeails=async()=>{
      
      
        const response =await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        const data =await response.json();
        setRecipeItems(data.meals[0]);
        console.log(data);
        
        
    }
    useEffect(()=>{
        if(id)
            fetchDeails(id);
    },[])

            
    const ingreList=[];
for (let i = 1; i <= 20; i++) {
  const ingre = recipeitems[`strIngredient${i}`];
  const measure = recipeitems[`strMeasure${i}`];
  
  if (ingre) {
    ingreList.push(
      <li>{measure} {ingre}</li>
    )}}

    
  return (
    <>

    <div  className='flex justify-center flex-col items-center min-w-full'>
    <img  className =' mt-5 border-4 'src={recipeitems.strMealThumb}  width="200"  />
    <h2 className='font-semibold text-xl'>{recipeitems.strMeal}</h2>
    
   

<h2 className='mt-4 font-bold text-2xl border-b-2'>
    INGREDIENTS:-
</h2>
<ul>{ingreList}</ul>

      <h2 className='text-2xl mt-4 font-bold border-b-2'>INSTRUCTIONS:-</h2>
      <h4 className='border b-2  mt-5 text-justify p-2'>{recipeitems.strInstructions}</h4>
      </div>

      <TrendingMeals/>
      
      
    </>
  )
}

export default RecepieDetails
