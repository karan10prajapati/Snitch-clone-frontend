import React from 'react'

function MyButton({label}) {
  
  return (
    <>
       <div className="border border-black rounded-full px-2 py-1 hover:bg-black hover:text-white max-sm:text-center">{label}</div>
    </>
  )
}

export default MyButton