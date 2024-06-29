import React from "react";
import { list } from "../../constants/orderpage/Data.jsx";

function Orderbar({setIndex}) {
 
  const clickHandler =(i) => {
    console.log(i)
  }

  return (
    <>
      <div className=" md:flex md:flex-col md:gap-3 border-b   ">
        <div className="flex gap-3 items-center p-2 rounded-2xl border max-md:hidden ">
          <div className="text-2xl rounded-full bg-gray-800 text-white p-3">
            KP
          </div>
          <div>Karan Prajapati</div>
        </div>

        <div className="flex flex-col gap-4">
          {list.map((item,i) => {
            return (
              <div
                className={`flex gap-4 pl-5 items-center ${
                  item.border && "border-b"
                } `} key={i}
                onClick={()=>{ if (i==10){setIndex(2)} 
                if(i==2){setIndex(1)}}}
              >
                {item.icon} <div> {item.label} </div>
              </div>
            ); 
          })}
        </div>
       
      </div>
    </>
  );
}

export default Orderbar;
