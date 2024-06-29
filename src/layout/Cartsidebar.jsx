import React, { useEffect } from "react";
import { useState } from "react";
import Decider from "../components/Decider";
import { getCartdata, getcartProduct } from "../redux/slices/Cart";
import { useDispatch,useSelector } from "react-redux";
import Loader from "../components/Loader";
import CartProduct from "../components/CartProduct";

function Cartsidebar() {
  const [open, setopen] = useState(false);
  const dispatch = useDispatch();
  const [cartProduct,setProduct] = useState([])

 
  const {cart,loading}  = useSelector( state => state.cart)

  useEffect(() => {
      async function fetchdata () {
        await dispatch(getCartdata())
       const data = await dispatch(getcartProduct())
       setProduct(data)
       
      }  
      fetchdata();
     
  }, []);

  function handleclickopen() {    
    setopen(true);
  }

  function handleClose() {
    setopen(false);
  }



  return (
    <>
    
    { loading ? <div className="w-96 justify-center flex h-full items-center"><Loader /></div> :
      <div className="w-96 mt-9 flex flex-col gap-4 h-screen ">
      <div className="text-4xl ml-5 ">CART</div>

      <div className="border w-[85%] mx-auto"></div>

      <div>
        {" "}
        {cart && cart.length === 0 ? (
          <h1 className="text-center text-2xl">EMPTY</h1>
        ) : (
          <>
            <div className="w-[85%] mx-auto h-80
             overflow-y-auto ">

               {cart && cartProduct.map (product =>   <CartProduct product={product} />) }
             
            </div>
            <div className="mt-20 w-[85%] mx-auto ">
              <div className="flex justify-between border-t mt-6">
                <div>SUBTOTAL</div>
                <div>RS .</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm">
                  Shopping,taxes and discount codes calculated at cheeckout
                </div>

                <div
                  className="w-full bg-black text-center mt-3 text-white p-3"
                  onClick={handleclickopen}
                >
                  PRCOEDD TO CHECKOUT
                </div>
                <Decider open={open} onClose={handleClose} />

              </div>
            </div>
          </>
        )}{" "}
      </div>
    </div>
    }
      
    </>

  );
}

export default Cartsidebar;
