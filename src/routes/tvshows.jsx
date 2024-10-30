
import { MovieContext } from "../context/Moviecontext";
import { useContext, useState } from "react";



const Tvshows = () => {
  const { tvShows } = useContext(MovieContext)
  const [filteredMovie, setfilteredMovies] = useState(tvShows)

  const handleSearch = (event) => {
    const searchFieldValue = event.target.value.toLowerCase();
    const filteredValue = tvShows.filter((filterResult) => (
       filterResult.name.toLowerCase().includes(searchFieldValue)
    ))
    setfilteredMovies(filteredValue)

  
  }


  return (

    <>
    <div className="flex border rounded-full w-1/2  m-auto my-8">
        <img src="/Icon.png" className="px-1.5 py-1" />  
      <input 
      placeholder="Search" 
      type="text" 
      className="outline-none text-white rounded-r-2xl bg-black w-full" 
      onChange={handleSearch}/>
    </div>

<div className=" flex flex-wrap justify-center gap-6">
{filteredMovie.map((tvshow) => (
    <div className="flex flex-col items-center w-40 sm:w-48 md:w-52 lg:w-60"  key={tvshow.id}> 
      <div>
      <img className="w-full h-auto rounded object-cover" 
       src={`https://image.tmdb.org/t/p/w500${tvshow.poster_path}`} 
       alt={tvshow.title} />
      </div>
       <div className="mt-2 text-center text-sm" >{tvshow.name}</div>
    </div>
    ))}

</div>
   
    
    </>
  )
}

export default Tvshows
