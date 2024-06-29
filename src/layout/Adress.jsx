import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addingAddress } from "../redux/slices/auth";

function Adress({ setindex }) {
  const [name, setName] = useState("");
  const [locality, setLocality] = useState("");
  const [city,setCity]  = useState("")
  const [state,setState] = useState("")
  const [country,setCountry] = useState("")
  const [zipcode,setZipcode] = useState("")
  const dispatch = useDispatch()

  const submitHandler = async(e) => {
    e.preventDefault();

    try {
       const data = {
        name,
        locality,
        city,
        state,
        country,
        zipcode
        
       }
      const result =  await dispatch(addingAddress(data))
      
      if(result){
         setindex(2)
      }

    } catch (error) {
      console.log(error)
    }

  };



  return (
    <>
      <form className="w-80 flex flex-col gap-3 pb-4" onSubmit={submitHandler}>
        <div>
          <div className="flex items-center gap-2 ml-2 mt-2 text-2xl">
            <FaArrowLeftLong
              onClick={() => {
                setindex(0);
              }}
            />{" "}
            Add Address
          </div>
        </div>

        <div className="w-10/12 mx-auto ">
                <div>Full Name</div>

                <input
                  type="text"
                  placeholder="Your Full Name"
                  className="placeholder: w-full p-2 border"
                  onChange={(e) => { setName(e.target.value) }}
                  value={name}
                  required="true"
                />
        </div>

        <div className="w-10/12 mx-auto ">
                <div>locality</div>

                <input
                  type="text"
                  placeholder="Search Your Area and Your building"
                  className="placeholder: w-full p-2 border"
                  value={locality}
                  onChange={(e)=>{setLocality(e.target.value)}}
                  required
                />
        </div>
        <div className="w-10/12 mx-auto ">
                <div>city</div>

                <input
                  type="text"
                  placeholder="Search Your Area and Your building"
                  className="placeholder: w-full p-2 border"
                  value={city}
                  onChange={(e)=>{setCity(e.target.value)}}
                  required
                />
        </div>
        <div className="w-10/12 mx-auto ">
                <div>state</div>

                <input
                  type="text"
                  placeholder="Search Your Area and Your building"
                  className="placeholder: w-full p-2 border"
                  value={state}
                  onChange={(e)=>{setState(e.target.value)}}
                  required
                />
        </div>

        <div className="w-10/12 mx-auto ">
                <div>country</div>

                <input
                  type="text"
                  placeholder="Search Your Area and Your building"
                  className="placeholder: w-full p-2 border"
                  value={country}
                  onChange={(e)=>{setCountry(e.target.value)}}
                  required
                />
        </div>

        <div className="w-10/12 mx-auto ">
                <div>zipcode</div>

                <input
                  type="number"
                  placeholder="pincode"
                  className="placeholder: w-full p-2 border"
                  required
                  value={zipcode}
                  onChange={(e)=>{setZipcode(e.target.value)}}
                />
        </div>

        <button className="bg-cyan-400 w-10/12 mx-auto p-2 text-lg"  type="submit" >continue</button>    
        
      </form>
     
    </>
  );
}

export default Adress;
