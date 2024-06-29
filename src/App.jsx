
import Navbar from './layout/navbar'
import Footer from './layout/Footer'
import { Outlet } from 'react-router-dom'


function  App() {

  

  return (
    <>
     <div className="w-full"> 
     <Navbar />
      <Outlet />
      <Footer />
     </div>
       
    </>
  )
}

export default App
