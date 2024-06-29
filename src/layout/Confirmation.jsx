import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { IoMdAddCircleOutline } from "react-icons/io";
import CartProduct from "../components/CartProduct";
import { getcartProduct } from "../redux/slices/Cart";
import { useState,useEffect } from "react";
import { getCartdata } from "../redux/slices/Cart";
import OrderCard from "../components/OrderCard";


function Confirmation({ setindex }) {

  const Addresses = useSelector((state) => state.auth.address);
  const [cartProduct,setProduct] = useState([])
  const dispatch = useDispatch()


  useEffect(() => {
    async function fetchdata () {
      await dispatch(getCartdata())
     const data = await dispatch(getcartProduct())
     setProduct(data)
     
    }  
    fetchdata();
   
}, []);

  return (
    <div className="flex gap-3 bg-gray-200 overflow-x-hidden  w-full">
      <div className="bg-white flex flex-col gap-5  ">
        <div className="flex justify-around gap-24 p-2 m-3 bg-gray-200 rounded-md">
          <div>
            <img src="https://cdn.gokwik.co/merchant/159/logo1634198365753.svg" />
          </div>
          <div>Mobile...Address</div>
          <div>Pay</div>
        </div>

        <div className="ml-3">Hey! Welcome back</div>

        <div className="flex flex-col gap-2 p-2 m-2 rounded-md border">
          <div> 
             <div className="text-lg">{Addresses.name}</div>
          </div>
          <div className="text-gray-300">{Addresses.address}</div>
        </div>

        <div className="text-xl flex gap-2 items-center ml-2 p-2" onClick={()=>{setindex(1)}}> 
          <IoMdAddCircleOutline />  Add New Address
        </div>

       <button className="p-2 m-4 rounded-md bg-cyan-400 " onClick={()=>{setindex(3)}}>Continue</button>

      </div>

      <div className="p-4 bg-white flex flex-col gap-3  overflow-x-hidden  ">
        <div>Order Summary</div>
        
        <div className="overflow-y-auto overflow-x-hidden  h-28 scrollbar-thin">
           
           {CartProduct.length>0 && cartProduct.map (product =>   <OrderCard product={product} />) }
        </div> 

      </div>
    </div>
  );
}

export default Confirmation;
