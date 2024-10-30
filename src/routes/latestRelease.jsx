
import { MovieContext } from "../context/Moviecontext";
import { useContext, useState } from "react";


const LatestRelease = () => {
  const { movie } = useContext(MovieContext)
  const [filteredMovie, setfilteredMovies] = useState(movie) 

  const handleSearch = () => {
    const searchField = event.target.value.toLowerCase();
    const filteredValue = movie.filter((filterResult) => (
      filterResult.title.toLowerCase().includes(searchField)
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
      className="outline-none text-white rounded-r-2xl bg-black  w-full" 
      onChange={handleSearch}/>
    </div>

<div className=" flex flex-wrap justify-center gap-6">
{filteredMovie.map((movies) => (
    <div className="flex flex-col items-center w-40 sm:w-48 md:w-52 lg:w-60"  key={movies.id}> 
      <div>
      <img className="w-full h-auto rounded object-cover" 
       src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`} 
       alt={movies.title} />
      </div>
       <div className="mt-2 text-center text-sm" >{movies.title}</div>
    </div>
    ))}

</div>
   
    
    </>
  )
}

export default LatestRelease
