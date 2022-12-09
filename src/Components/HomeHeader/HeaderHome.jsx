import React from "react";
import { NavLink } from "react-router-dom";

const HomeHeader = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/">
        <img src="./img/logo-cybersoft.png" alt="" />
      </NavLink>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      />
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
          {/* <li className="nav-item">
            <NavLink className="nav-link active" to="/" aria-current="page">
              Home <span className="visually-hidden">(current)</span>
            </NavLink>
          </li> */}
        </ul>
        <form className="d-flex my-2 my-lg-0">
          <NavLink to="/search" className="nav-link text-white"><i className="fa fa-search mx-2"></i>
            Search
          </NavLink>

          <NavLink to="/carts">
            <i
              className="fa fa-cart-plus text-white mx-4"
              style={{ fontSize: "25px" }}
            ></i>
          </NavLink>
          <NavLink to="/login" className="nav-link text-white">
            Login
          </NavLink>
          <NavLink to="/register" className="nav-link text-white mx-4">
            Register
          </NavLink>
        </form>
      </div>
    </nav>
  );
};

export default HomeHeader;
