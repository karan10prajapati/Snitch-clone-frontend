import React from 'react'
import { useMediaQuery } from "@uidotdev/usehooks";
import Orderbar from './Orderbar';
import OrderBaraNew from './OrderbarNew';
import ChangePassoword from './changePassword/M.changePassword';
import Orderdetail from './Orderdetail'
import { useState } from 'react';

function MainOrderpage() {

    const isWide = useMediaQuery("(max-width: 768px)");

    const [index,setIndex] =  useState(1);

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  

  return (
    <> 
         <div className="w-full  md:flex justify-center mt-8 gap-8">
        <div className="w-full md:w-[18%] max-md:w-11/12 max-md:mx-auto max-md:h-24  rounded-2xl border   max-md:flex">
          {isWide ? <OrderBaraNew setIndex={setIndex} /> : <Orderbar setIndex={setIndex} />}

          <div></div>
        </div>

        <div className=" md:w-[55%] max-md:mx-auto max-md:mt-14 max-md:border ">
          <div className="flex justify-center">
            <div className="text-2xl w-14 rounded-full bg-gray-800 text-white p-3 md:hidden  relative bottom-5 ">
              KP
            </div>
          </div>

          <div className="md:text-3xl text-sm text-center relative bottom-5">
            Good Evening <br /> Karan
          </div>

          <div className="w-11/12 mx-auto border p-2 shadow-md rounded-lg">
        
            { index==1 && <Orderdetail/> } 
            {index ==2 && <ChangePassoword /> }

          </div>
        </div>
      </div>
    </>
  )
}

export default MainOrderpage