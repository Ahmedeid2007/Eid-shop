import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Navbar() {
 


  const cart = useSelector(state => state.Cart)

  var x = cart.length
 
 
 
 
  return (

    <>
      {" "}
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Eid-Store
          </Link>
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
          <div className="collapse navbar-collapse row" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/features">
                  Features
                </Link>
              </li>
              <li className="nav-item col-lg-10 col-6  d-flex flex-row-reverse bd-highlight position-relative ">
                <Link className="nav-link  " to="/Cart">
                  <FontAwesomeIcon icon={faCartShopping} />
                </Link>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {x}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
