import { useEffect,useState} from "react"
import axios from 'axios'


const EidCollection = () => {
  const[products,setProducts]=useState([])


const apiFun=async()=>{
  const Result= await axios.get("https://fakestoreapi.com/products")
  setProducts(Result.data)

}
  useEffect(()=>{
apiFun()
  })
  return (
<div className="productsdisply">
  {
    products.map((product)=>{
      return(<div class="card" style={{width: "18rem"}}>
      <img  src={product.image}  style={{height:"100px",width:"100px"}} alt="..."/> 
        <div class="card-body">
          <h5 class="card-title">{product.title}</h5>
          <p class="card-text">{product.description.slice(0,30)+"..."}</p>
          <a href="#" class="btn btn-primary">{product.price}</a>
        </div>
      </div>)
    })
  }
</div>  )
}

export default EidCollection
