import React, { useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiCamera } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { BsList } from "react-icons/bs";
import { useState } from "react";
import { useScrollTop } from "../hook/use-scroll.top";
import Tooltip from "@mui/material/Tooltip";
import { CiUser } from "react-icons/ci";
import Cartsidebar from "./Cartsidebar";
import TemporaryDrawer from "./TemporaryDrawer";
import { Drawer } from "@mui/material";
import { useNavigate } from 'react-router-dom'
import { me } from '../redux/slices/auth'
import { useDispatch, useSelector } from 'react-redux'


function Navbar() {
  const scroll = useScrollTop();
  const [open, setOpen] = useState(false);
  const [cartopen, setcartopen] = useState(false);
  const navigate=useNavigate()
  const dispatch=useDispatch()

  const [authenticated,setAuthenticated] = useState(false)

  const clickHandler =  async ( ) => { 

     const token = localStorage.getItem('token');
     
     if(!token){
        navigate('/signup')
     }

     else{
      try{

          const response = await dispatch(me(token))
          if(response==true){
            setAuthenticated(true)
            navigate('/orderpage')
          }
          else{
            navigate('/login')
          }

      }catch(err){
           console.log("error",err)
      }

     }

  }

  useEffect ( () => { 
      const token = localStorage.getItem('token');
      async function fetchUserInfo (){
        if(token){
          const result = await dispatch(me(token))
        }
      }
     fetchUserInfo();
  },[])

  return (
    <div
      className={`border border-light-black w-full h-24 flex justify-center items-center sticky top-0  bg-white z-10 p-3 ${
        scroll && "shadow-lg element-to-bounce"
      }`}
    >

      <div className="w-[95%]  flex justify-between items-center text-2xl ">
        <div>
          <BsList onClick={() => setOpen(!open)} className="cursor-pointer" />
          <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
            <TemporaryDrawer setOpen={setOpen} />
          </Drawer>
        </div>
        <div>
          <img
            src="https://www.snitch.co.in/cdn/shop/files/blackoption.png?v=1659016547&width=220"
            alt="logo"
            className="h-[55px] pl-24 max-md:pl-0 max-md:h-[30px]"
          />
        </div>

        <div className="flex  gap-5 max-md:gap-2 ">
          <Tooltip title="icon-search">
            <div >
              <CiSearch />
            </div>
          </Tooltip>
          <div className="max-md:hidden">
            <CiHeart />
          </div>
         
            <Tooltip title="account" >
              <div className="max-sm:hidden" onClick={clickHandler}>
                  {authenticated ? (<div> <CiUser /></div>) : ( <CiUser />)}
              </div>
            </Tooltip>
         

          <Tooltip title="icon-bag-outline">
            <div className="max-sm:hidden">
              <IoBagOutline className="cursor-pointer" onClick={() => {setcartopen(!cartopen)}} />
              <Drawer open={cartopen} anchor="right" onClose={()=> setcartopen(false)}> 
                <Cartsidebar />
              </Drawer>
            </div>
          </Tooltip>

          <div >
            <CiCamera />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
