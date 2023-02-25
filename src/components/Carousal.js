import React from 'react'

function Carousal() {
  return (
    <div className='mt-0'>



<div id="carouselExampleControls" className="carousel slide wh-50 " data-bs-ride="carousel" style={{"object-fit":"contain"}}>

  <div className="carousel-inner">
  <div className="ms-3 carousel-caption  text-white" style={{ zIndex: "9" ,  }}>
                      <h1>Giving your Hunger a new Option</h1>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero aspernatur animi doloremque ipsa iure explicabo, architecto esse, eveniet officiis porro quam! Nihil error deleniti labore iure, fugit quas? Harum, minus.</p>
                      
  </div>
    <div className="carousel-item active">

      <img src="https://i.pinimg.com/originals/bf/65/d5/bf65d51f34b1bf193ec947f3c0c3f3e0.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://t3.ftcdn.net/jpg/02/57/29/88/360_F_257298837_B8n4pIKuxTVd2O9FyZAr44b4jU5FGnCH.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://media.istockphoto.com/id/1341124683/photo/autumn-desserts-double-side-border-with-a-variety-of-sweet-fall-treats-over-a-dark-wood.jpg?b=1&s=170667a&w=0&k=20&c=B2YYWTVCRAWGQOQaodRwHgIIl3PJgFS0tV6-8c_MKgI=" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>




    </div>
  )
}

export default Carousal