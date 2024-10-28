import { useState } from "react"
import { Link } from "react-router-dom"


const NavbarLinks = () => {
  return  (
    <div>
    <ul className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
        <Link to='/top-rated'>
        <li>Top-rated</li> 
        </Link>
        <Link to='/upcoming'>
        <li>Up coming</li>
        </Link>
        <Link to='/latest-release'>
        <li>Latest release</li>
        </Link>
        <Link to='/tv-shows'>
        <li>Tv shows</li>
        </Link>
    </ul>
    </div>    

  )
}

const IconLinks = () => {
  return(
    <>
     <div className="flex items-center px-1 py-1"> 
        <button>
        <img src="/Icon.png" className="px-1.5" />  
        </button>

    <button>
    <img src="/notification.png" className="px-1.5" /> 
    </button>
          
          </div>
    
    </>
  )
}




const Navbar = () => {

  const [isOpen, setisOpen] = useState(false);

  const tooglenavbar = () => {
   setisOpen(!isOpen)
 }

 


  return (
    <>
  <nav className="flex justify-between items-center my-2 px-4 lg:px-8 md:px-2">
 
   <div>
    <Link to='/'>
    <img className="w-32" src="/Logo.png"/>
    </Link>
     
    </div>
  
      <div className="hidden md:block">
          <NavbarLinks />
        </div>
      

      <div className="hidden md:block">
        <IconLinks />
      </div>
        
        
    <div className=" md:hidden" onClick={tooglenavbar}>
   {isOpen ?  <img className="text-white" src="/icon-close.svg"/> : <img src="/hamburger-menu.png"/>  }
    </div>

         
    </nav>

  {isOpen &&  (
   <div className=" absolute inset-x-0 top-15 py-10 transition-all duration-1000 bg-black flex flex-col items-center space-y-4  sm:block md:hidden ">
    <NavbarLinks />
   </div>
  )}
    </>
  
  )
}

export default Navbar
