import React,{useState,useEffect} from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Card from '../components/Card'
// import { Button } from 'react-bootstrap'
import Carousal from '../components/Carousal'

function Home() { 

const [foodCat, setFoodCat] = useState([])
const [foodItem, setFoodItem] = useState([])


const loadData = async()=>{
let response = await fetch("http://localhost:5000/api/foodData",{
  method:'POST',
  headers:{  
    'Content-Type':'application/json'
  }
});
response=await response.json();
// console.log(response[0],response[1]);


setFoodItem(response[0]);
setFoodCat(response[1]);

}



useEffect(() => {
  loadData()


}, [])



  return (
    <div>
 <div><Header/></div>
 <div><Carousal/></div>
   <div className='container'>
   {
    foodCat !==[] ? 
    foodCat.map((data)=>{ 
      return (
        <div className='row mb-3'>

      <div key={data._id} className="fs-3 m-3">
      {data.CategoryName}</div>
      <hr/>
      {foodItem !==[] ? foodItem.filter((item)=>item.CategoryName===data.CategoryName)
      .map(filterItem=>{
        return (
        <div key={filterItem.key} className="col-sm-12 col-md-6 col-lg-4 col-xl-3  pt-3">
          <Card foodItem = {filterItem} 

          //  foodName = { filterItem.name}
          
          options={filterItem.options[0]}
          // imgSrc={filterItem.img}
          ></Card>
        </div>
       )
      }):<div>NO Item Found</div>}
    </div>
      )
    }):""
   }

   {/* <Card/> */}
   
   </div>
    <div><Footer/></div>
    </div>
   
  )
}

export default Home