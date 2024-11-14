import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [Login,setLogIn]=useState(true);
  const navigate=useNavigate();
  const handleLogin=()=>{
    setLogIn(false);
    navigate('/')
  }
  const handleLogout=()=>{
    setLogIn(true)

  navigate('/')
  }
  return (
    <>
    <div className="navbar bg-base-100  ">
  <div className="navbar-start">
    <div className="dropdown ">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li ><Link  to="/">Home</Link></li>
      
      <li ><Link to="/recipe">Meals</Link></li>
     
        
      </ul>
    </div>
   <Link to={'/'} className="btn btn-ghost text-xl"><img src="file.png" alt="" className='w-16 rounded-full' /></Link> 
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to="/">Home</Link></li>
      
       <li><Link to="/recipe">Meals</Link></li>
      
      
    </ul>
  </div>
  <div className="navbar-end">
    {Login?
    <a className="btn " onClick={handleLogin}>Log-in</a>
    :<a className="btn " onClick={handleLogout}>Log-out</a>

}
  </div>
</div>


      
    </>
  )
}

export default Navbar