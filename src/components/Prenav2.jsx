import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";



const Prenav2 = () => {
  return (
    <>
    <nav className="prenav2">
   <div className="logo" style={{width: "10px"}}><img src='https://stylo.pk/cdn/shop/files/110x60-Logo_45_140x.png?v=1705411679'/></div>
   <div className="icons">
    <div className="icon1"><CiSearch />
    </div>
    <div className="icon4"><CiUser />
    </div>
    <div className="icon2"> <CiHeart />
    </div>
    <div className="icon3"><CiShoppingCart />
    </div>
   </div>
    </nav>
    

    </>
  )
}

export default Prenav2
