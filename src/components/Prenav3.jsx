import React from 'react'
import { Link } from 'react-router-dom'

const Prenav3 = () => {
  return (
    
    
    <div >
      <ul className='navbar3' >
        <li style={{color:'red'}}> <Link className="color"  to={"/home"}> Sale </Link> </li>
        <li> <Link className="color" to={"/EidCollection"}> Eid || Collection </Link></li>
        <li>  <Link className="color" to={"/Summer24"}> Summer 24 </Link> </li>
        <li>  <Link className="color" to={"/Womenshoes"}> Women Shoes </Link> </li>
        <li><Link className="color" to={"/Womenapperal"}> Women Apperal </Link> </li>
        <li><Link className="color" to={"/Bags"}> Bags </Link> </li>
        <li><Link className="color" to={"/Kids"}> Kids </Link> </li>
        <li><Link className="color"  to={"/Accessories"}> Accessories </Link> </li>
        <li><Link className="color"  to={"/Fragrnces"}> Fragrences </Link> </li>
      </ul>
  
    </div>
  )
}

export default Prenav3
