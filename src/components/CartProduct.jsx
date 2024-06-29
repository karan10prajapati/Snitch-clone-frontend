import React from "react";
import { useState } from "react";

function CartProduct({product}) {

  const [value, setvalue] = useState(1);

  function incvalue() {
    setvalue(value + 1);
  }

  function decvalue() {
    setvalue(value - 1);
  }

  return (
    <>
      <div className=" flex gap-6 mt-4">
        <div>
          <img src={product.image} className="w-24" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-sm">Name:{product.title.shortTitle}</div>
          <div className="text-sm">color:White</div>
          <div className="text-sm">Size:MD</div>
          <div className="flex justify-between items-center w">
            <div>
              <div className="flex items-center border  justify-around">
                <div className="pl-1" onClick={incvalue}>
                  +
                </div>
                <div className="ml-4 mr-4">{value}</div>
                <div className=" pr-1" onClick={decvalue}>
                  -
                </div>
              </div>
            </div>
            <div className="text-sm">Rs. {product.price.mrp}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartProduct;
