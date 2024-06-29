import React from 'react'

function Cardt({name,imgurl}) {
  
   return (<>
   
     <div className="relative">
         <div className="hover:scale-110 transition duration-300 ease-in  "><img src={imgurl} className=" rounded-2xl"/></div>
         <div className="absolute bottom-6 left-4 md:text-xl text-white">{name}</div>
     </div>

   </>)

}

export default Cardt