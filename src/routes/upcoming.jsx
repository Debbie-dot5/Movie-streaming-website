
import { MovieContext } from "../context/Moviecontext";
import { useContext, useState } from "react";




const Upcomingshows = () => {
  const { upComing } = useContext(MovieContext);
  const [filteredMovie, setfilteredMovies] = useState(upComing)

  const handleSearch = (event) => {
    const searchFieldValue = event.target.value.toLowerCase();
    const filteredValue = upComing.filter((filterResult) => (
       filterResult.title.toLowerCase().includes(searchFieldValue)
    ))
    setfilteredMovies(filteredValue)

   
  }


  return (

    <>
    <div className="flex border rounded-full w-1/2  m-auto my-8 ">
        <img src="/Icon.png" className="px-1.5 py-1" />  
      <input 
      placeholder="Search" 
      type="text" 
      className="outline-none text-white rounded-r-2xl bg-black w-full" 
      onChange={handleSearch}/>
    </div>

<div className=" flex flex-wrap justify-center gap-6">
{filteredMovie.map((upcomingshows) => (
    <div className="flex flex-col items-center w-40 sm:w-48 md:w-52 lg:w-60"  key={upcomingshows.id}> 
      <div>
      <img className="w-full h-auto rounded object-cover" 
       src={`https://image.tmdb.org/t/p/w500${upcomingshows.poster_path}`} 
       alt={upcomingshows.title} />
      </div>
       <div className="mt-2 text-center text-sm" >{upcomingshows.title}</div>
    </div>
    ))}

</div>
   
    
    </>
  )
}

export default Upcomingshows
