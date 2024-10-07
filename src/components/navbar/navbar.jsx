
const Navbar = () => {
  return (
    <>
  <div className="flex justify-between items-center bg-green">
  <img src="\Logo.png"/>
  
    <div>
        <ul className="flex justify-between items-center space-x-4  hidden lg:block lg:flex">
          <li><a href="#home">Home</a></li>
          <li><a href="#discover">Discover</a></li>
          <li><a href="#movie release">Movie release</a></li>
          <li><a href="#forum">Forum</a></li>
          <li><a href="#about">About</a></li>
        </ul>
        </div>    

          <img src="\Icon.png" />
    </div>
    </>
  
  )
}

export default Navbar
