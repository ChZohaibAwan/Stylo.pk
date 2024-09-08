import axios from 'axios'
import React, {useEffect,useState} from 'react'

const Summer24 = () => {
  const[products,setProducts]=useState([])
  const fetchdata=async()=>{
    const respoonse=await axios.get ("https://fakestoreapi.com/products/category/jewelery");
    setProducts(respoonse.data)
  }
useEffect(()=>{
  fetchdata()
  
})
  return (
    
    <div className='gewelery'>
      {products.map((product)=>{
        return(<div className="card" style={{width: "18rem"}}>
          <img src={product.image} style={{width: "100px", height: "100px"}} class="card-img-top" alt="..."/>
          <div class="card-body" src={product.image}>
            <h5 class="product.title" >src={product.title}</h5>
            <p class="description" >src={product.description}</p>
            <a href="#" class="btn btn-primary">src={product.price}</a>
          </div>
        </div>)
      })}
    </div>
  )
}

export default Summer24
