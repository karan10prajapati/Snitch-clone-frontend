import React from "react";
import Size from "./Size";
import { NavLink } from "react-router-dom";

function Card({id, price, name, imgurl }) {

 
  return (
    <>
    <NavLink to={{pathname:`/product/${id}`}}>
      <div className="flex flex-col gap-2 justify-baseline text-clip mt-0 align-middle  w-full mx-auto justify-self-stretch items-stretch">
        <div className="w-full mt-0  mb-0">
          <img src={imgurl} className="h-full w-full " />
        </div>
        <div className="text-xs  ">{name}</div>
        <div className=" text-xs "> Rs. {price}</div>

       <div > <Size /></div>
      </div>
    </NavLink>
    </>
  );
}

export default Card;
