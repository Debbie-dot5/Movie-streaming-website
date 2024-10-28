
const footerData = {

    navLinks: [
        { name: "Categories"},
        { name: "Devices"},
        { name: "Pricing"},
        { name: "FAQ"},
    ],


    movieNavLinks: [
        { Title: "Movies"},
        { name: "Genre"},
        { name: "Trending"},
        { name: "New release"},
        { name: "Popular"},
    ],

    showNavLinks: [
        { Title: "Movies"},
        { name: "Genre"},
        { name: "Trending"},
        { name: "New release"},
        { name: "Popular"},
    ],

    supportLinks: [
        { name: "Contact us"},

        
    ],

   subscriptionLinks: [
        { Title: "Subscription"},
        { name: "Plans"},
        { name: "Features"},


        
    ],


    socialIcons: [
        { name: "Facebook", icon: "/facebook.png", url: "https://facebook.com" },
        { name: "Twitter", icon: "/twitter.png", url: "https://twitter.com" },
        { name: "linkedin", icon: "/linkdeln.png", url: "https://instagram.com" }
      ],

}
   



const Footer = () => {

   
    
  return (
   <footer className="bg-neutral-800 pt-10 mt-10">
    <div className=' px-4 lg:px-8 md:px-2 grid grid-cols-2 md:grid-cols-6 gap-8 mb-10'>

      <div>
      <h2 className="font-bold">Home</h2>
      <ul className="text-sm text-zinc-500 cursor-pointer">
      {footerData.navLinks.map((links, index) => (
        <li key={index}>{links.name}</li>
      ))}
        </ul>
      </div>

      <div>
      <h2 className="font-bold">Movies</h2>
      <ul className="text-sm text-zinc-500 cursor-pointer">
      {footerData.movieNavLinks.map((links, index) => (
        <li  key={index}>{links.name}</li>
      ))}
        </ul>
      </div>

      <div>
      <h2 className="font-bold">Shows</h2>
      <ul className="text-sm text-zinc-500 cursor-pointer">
      {footerData.showNavLinks.map((links, index) => (
        <li key={index}>{links.name}</li>
      ))}
        </ul>
      </div>

      <div>
      <h2 className="font-bold">Support</h2>
      <ul className="text-sm text-zinc-500 cursor-pointer">
      {footerData.supportLinks.map((link, index) => (
        <li key={index}>{link.name}</li>
      ))}
        </ul>
      </div>

      <div>
      <h2 className="font-bold">Subscriptions</h2>
      <ul className="text-sm text-zinc-500 cursor-pointer">
      {footerData.subscriptionLinks.map((link, index) => (
        <li key={index}>{link.name}</li>
      ))}
        </ul>
      </div>


      <div>
      <h2 className="font-bold">Connect with us</h2>
      <ul className="text-sm text-zinc-500 flex gap-4 mt-4 cursor-pointer">
      {footerData.socialIcons.map((links, index) => (
        <button key={index} className="bg-zinc-900 p-2 rounded-lg ">
            <img  src={links.icon}></img>
        </button>
      ))}
        </ul>
      </div>

      </div>


      <hr className="mb-4 border-gray-600 mx-4 lg:mx-8 md:mx-2" />

      <div className="flex flex-col md:flex-row items-center md:justify-between pb-5 px-4 lg:px-8 md:px-2">
        <h2>All Rights Reserved </h2>

        <h2>Terms of use <span className="text-zinc-500 mx-1">|</span> 
          Privacy Policy <span className="text-zinc-500 mx-1">|</span> 
          Cookie Policy</h2>
      </div>
   
   </footer>
  )
}

export default Footer
