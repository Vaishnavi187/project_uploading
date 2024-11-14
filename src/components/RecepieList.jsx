import React,{useState,useEffect} from 'react' ;
import {Link} from 'react-router-dom'

const RecepieList = () => {
    const [recipes, setRecipes] = useState([]);  
    const[items,setItems]=useState('Indian');
    
    const[category,setcategory]=useState("");
    const[meal,setMeal]=useState("");
    const[ingredient,setIngredient]=useState("");

    const fetchRecipes = async () => {

    
        let response=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${items}`);
   
       let data=await response.json();
       setRecipes(data.meals);
       console.log(data);
       
     };
   
   
     useEffect(() => {
       if  (items)
       fetchRecipes(items);
     }, [items]);
   
   
   // const handleSubmit=async(e)=>{
   //   e.preventDefault();
   //     let response=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
   //     let data=await response.json();
   //     setRecipes(data.meals);
   //     setcategory("");
   //     console.log(data);
   //   }
   
     const handlebyname=async(e)=>{
       e.preventDefault();
       let response=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
       let data=await response.json();
       setRecipes(data.meals);
       setMeal("");
       console.log(data);
       
     }

    //  const handlebyingredient=async(e)=>{
    //    e.preventDefault();
    //    let response=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${indgredient}`)
    //    let data=await response.json();
    //    setRecipes(data.meals);
    //    setIngredient("");
      
       
    //  }
   
  //  const handleSubmit=async(e)=>{
  //    e.preventDefault();
   
  //      let link;  
   
  //      if (category)
  //      {
  //        link=`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
  //      }
  //      else if(meal){
  //        link= `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`;
  //      }
  //      else if(ingredient){
  //        link=`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  //      }
  //      else {
  //        console.log("invalid condition");    
  //      }
   
  //      let response=await fetch(link);
  //      const data=await response.json();
  //      setRecipes(data.meals);
  //      setIngredient('');
  //      setMeal('');
  //      setcategory('')
  //    }
   
  return (
    <>
     <div className='flex  flex-wrap justify-evenly min-w-full h-full' >

 {/* <form   onSubmit={handleSubmit}>
 <input className=' h-8 w-40 text-center'
    type="text"
    placeholder="Search by category..." 
    value={category}
   onChange={(e) => setcategory(e.target.value)}
  />
  <button className='bg-black p-1 '>Search</button>
 </form> */}
 <form onSubmit={handlebyname}>
  <input   className='h-10 text-center w-60 '
  type='text'
  placeholder='Search by name.....' 
  value={meal}
  onChange={(e)=>setMeal(e.target.value)}
  />
  <button className='bg-black p-2 ml-3 '>Search</button>
 </form>
 {/* <form onSubmit={handlebyingredient}>
  <input  className='h-10 text-center'
  type='text'
  placeholder='search by ingredient'
  value={ingredient}
  onChange={(e)=>setIngredient(e.target.value)}
  />
  <button className='bg-black p-1 '>Search</button>
 </form>  */}


{/* <form   onSubmit={handleSubmit}>
 <input className=' h-8 w-40 text-center'
    type="text"
    placeholder="Search by category..." 
    value={category}
   onChange={(e) => setcategory(e.target.value)}
  />
  
 
  <input   className='h-10 text-center ml-3'
  type='text'
  placeholder='search by name'
  value={meal}
  onChange={(e)=>setMeal(e.target.value)}
  />
  

  <input  className='h-10 text-center ml-3'
  type='text'
  placeholder='search by ingredient'
  value={ingredient}
  onChange={(e)=>setIngredient(e.target.value)}
  />
  <button className='bg-black p-1 ml-2 '>Search</button>
 </form> */}
 
    
      <div className=' gap-10 flex  flex-wrap' >
<button className="btn btn-outline btn-info" onClick={()=>setItems("Indian")}>Indian</button>
<button className="btn btn-outline btn-success"onClick={()=>setItems("Chinese")}>Chinese</button>
<button className="btn btn-outline btn-warning"onClick={()=>setItems("Thai")}>Thai</button>
<button className="btn btn-outline btn-error"onClick={()=>setItems("Italian")}>Italian</button>
</div>
</div>

 
   <div className='flex flex-wrap  gap-8 ml-10  mt-5'>
    {recipes?( recipes.map((recipess)=>(
       <div key={recipess.idMeal}>
       
       <Link to={`/recipe/${recipess.idMeal}`}>
       <img  src={recipess.strMealThumb} alt={recipess.strMeal} width="200"  className='transition-all duration-100 hover:scale-110 border-4' />
       <h2>{recipess.strMeal}</h2>
       </Link>
     </div>
    )


    )):(
      <h2 className='w-full flex justify-center items-center text-center'>No Data found</h2>
    )}
  </div> 
      
    </>
  )
}

export default RecepieList
