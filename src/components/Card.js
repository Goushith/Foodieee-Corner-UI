import React, { useEffect,useRef, useState } from 'react'
import { useDispatchCart,useCart } from './ContextReducer';
function Card(props) {
    let dispatch = useDispatchCart();
    let data =useCart();
    const priceRef = useRef()
    let options= props.options;
    let priceOptions = Object.keys(options)
    // let foodItem= props.foodItem;
    const [qty , setQty]=useState(1)
    const [size , setSize]=useState('')
    const handleAddtocart= async()=>{

        let food = []
        for(const item of data){
            if(item.id === props.foodItem._id){
                food=item;
                break;
            }
        }
               if(food!==[]){
                if(food.size===size){
                    await dispatch({type:"UPDATE", id:props.foodItem._id,price:finalPrice,qty:qty})
                    return
                }
               
               else if (food.size !== size) {
          await dispatch({ type:"ADD" , id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,qty:qty,size:size})
        //   await console.log(data)
        return
               }
               return
            } 
               await dispatch({ type:"ADD" , id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,qty:qty,size:size})
    
        }
        let finalPrice = qty * parseInt(options[size])
        useEffect(()=>{
            setSize(priceRef.current.value)
        },[])
    return (
        <div>
            <div className='ms-5' >
                <div className="card " style={{ "width": "18rem", "maxHeight": "620px" }}>
                    <img src={props.foodItem.img} className="card-img-top" alt="..." style={{height:"180px",objectFit:"fill"}} />
                    <div className="card-body ">
                        <h5 className="card-title">{props.foodItem.name}</h5>
                        <p className="card-text">{props.foodItem.description}</p>
                        {/* <Button href="#" className="btn btn-primary">Go somewhere</Button> */}
                        <div className="container w-100">
                            <select className='m-2 h-100  bg-success'  onChange={(e)=>setQty(e.target.value)}>
                                {Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    )
                                })}
                            </select>
                            <select className='m-2 h-100  bg-success' ref={priceRef} onChange={(e)=>setSize(e.target.value)}>
                             {priceOptions.map((data)=>{
                                return <option key={data} value={data}>{data}</option>
                             })}
                            </select>
                            <div className='d-in line h-100'>
                                TOTAL PRICE : ${finalPrice}/-
                            </div>
                            <hr/>
                             <button className={`btn btn-light text-dark justify-center ms-2`} onClick={handleAddtocart}>Add to Cart</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Card