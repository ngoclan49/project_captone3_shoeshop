import React, { memo } from "react";
import { NavLink } from "react-router-dom";

const ShoesCard = ({prod}) => {
  return (
    <NavLink to="/detail">
      <div className="card">
        <img src={prod.image} alt="" />
        <div className="card-body d-flex text-center justify-content-center align-item-center p-0">
            <div className="w-50 h-150 bg-dark text-white py-3">
                <h5>{prod.name}</h5>
            </div>
            <div className="w-50 h-150 bg-warning text-dark py-3">
                <h5>{prod.price}$</h5>
            </div>
        </div>
      </div>
    </NavLink>
  );
};

export default memo(ShoesCard);
