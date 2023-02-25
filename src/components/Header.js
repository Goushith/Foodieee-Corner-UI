import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import Badge from 'react-bootstrap/Badge'
import Modal from "../Model";
import Cart from "../screens/Cart";
import { useCart } from "./ContextReducer";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Header() {
  const [cartView, setCartView] = useState(false)
  let data = useCart( )
  const navigate = useNavigate()
  const handlelogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login')
  }



  return (
    <div>
      <nav className="navbar navbar-expand-lg  bg-success ">
        <div v className="container-fluid ">
          <a className="navbar-brand text-dark fs-3 fst-italic" href="/"> 
          <i className="fas fa-french-fries"></i> 
            FOOOODEEE'S 
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link
                  className="nav-link active text-dark fs-5"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              {(localStorage.getItem('authToken')) ? <li className="nav-item">
                <Link
                  className="nav-link active text-dark fs-5" aria-current="page" to="/myorder">
                  MY ORDERS
                </Link>
              </li> : ""}

            </ul>

            {(!localStorage.getItem('authToken')) ?
              <div className="d-flex">

                <Link className="btn bg-white text-dark mx-2" to="/login">
                  LOGIN
                </Link>



                <Link className="btn bg-white text-dark " to="/createuser">
                  SIGNUP
                </Link>

              </div>

              :

              <div>


                <div className="btn bg-white text-dark mx-2" onClick={() => { setCartView(true) }}>
                  MY CART
                  <Badge pill bg="danger" className="ms-2">{data.length}</Badge>
                </div>
                {cartView ? <Modal onClose={() => { setCartView(false)}}  ><Cart /></Modal> : null}



                <div className="btn bg-danger text-white mx-2" onClick={handlelogout} >
                  LOGOUT
                </div>
              </div>

            }


          </div>


        </div>
      </nav>

    </div>
  );
}

export default Header;
