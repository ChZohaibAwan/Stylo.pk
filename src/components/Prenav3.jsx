import React from 'react'
import { NavLink } from 'react-router-dom'

const Prenav3 = () => {
  return (
    
    
    <nav >
      <div className="menu">
      <span>A</span>
      <span>A</span>
      <span>A</span>
      
       
      </div>
      <ul className='navbar3' >
        <li > <NavLink className="color"  to={"/"}> Sale </NavLink> </li>
        <li> <NavLink className="color" to={"/EidCollection"}> Eid || Collection </NavLink></li>
        <li>  <NavLink className="color" to={"/Summer24"}> Summer 24 </NavLink> </li>
        <li>  <NavLink className="color" to={"/Womenshoes"}> Women Shoes </NavLink> </li>
        <li><NavLink className="color" to={"/Womenapperal"}> Women Apperal </NavLink> </li>
        <li><NavLink className="color" to={"/Bags"}> Bags </NavLink> </li>
        <li><NavLink className="color" to={"/Kids"}> Kids </NavLink> </li>
        <li><NavLink className="color"  to={"/Accessories"}> Accessories </NavLink> </li>
        <li><NavLink className="color"  to={"/Fragrnces"}> Fragrences </NavLink> </li>
      </ul>
  
    </nav>
  )
}

export default Prenav3
