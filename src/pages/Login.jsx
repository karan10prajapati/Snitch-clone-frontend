import React, { useState } from 'react'
import { IoMdMailUnread } from "react-icons/io";
import { login } from '../redux/slices/auth';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Login() {
  
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const clickHandler = async ()=>{ 
     
  

      try{
           let data={
            username,
            password
           }
          
          console.log("data",data)

          const response= await dispatch(login(data))

          if ( response ) {
            navigate('/orderpage')
          }
   
           
      }catch(err){
          console.log("error in login", err)
      }

  }

  return (
    <>
      <div className="w-full flex justify-center h-screen   ">
        
               <div className="mx-auto flex flex-col items-center  gap-5  mt-12"> 
                       
                      <div className="text-2xl font-medium ">LOGIN WITH EMAIL</div>

                      <div className="border"><input type="email" className="w-64 p-2" placeholder="Email"
                       value={username}  
                       onChange={(e) => {setUsername(e.target.value)}}
                      /></div> 

                      <div className="border"><input type="password" className="w-64 p-2" placeholder="Password" 
                       value={password}
                       onChange={(e) => { setPassword(e.target.value)}}
                      /></div>

                      <button
                       className='text-lg text-white bg-black p-1 w-20 border rounded-md' 
                       onClick={clickHandler}>
                       Login</button>
                    
               </div>


      </div>
    </>
  )
}

export default Login