import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  const image =
    "https://image.freepik.com/free-vector/funny-pug-dog-with-bone_101919-78.jpg";
  const linkStyle = { textDecoration: "none" };
  return (
    <nav className="navbar navbar-expand-sm navbar-dark">
      <div className="container-fluid">
        <Link to="/">
          <a className="navbar-brand" href="nav-image">
            <img
              src={image}
              alt="Avatar Logo"
              className="rounded-pill"
              style={{ width: "70px" }}
            />
          </a>
        </Link>
        <a className="navbar-brand" href="logo">
          DOG-CARE
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mynavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/Login" style ={linkStyle}>
                <a className="nav-link" href="Login">
                  Login
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Signup" style ={linkStyle}>
                <a className="nav-link" href="Sign-Up">
                  Sign Up
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Product" style ={linkStyle}>
                <a className="nav-link" href="Sign-Up">
                  Products
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Contact" style ={linkStyle}>
                <a className="nav-link" href="Contact">
                  Contact Us!
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
