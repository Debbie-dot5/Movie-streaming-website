
import { MovieContext } from "../context/Moviecontext";
import { useContext } from "react";



const TopRated = () => {
  const { topRated } = useContext(MovieContext)


  return (

    <>
    <div className="flex border rounded-full w-60">
        <img src="/Icon.png" className="px-1.5 py-1" />  
      <input 
      placeholder="Search" 
      type="text" 
      className="outline-none text-white rounded-r-2xl bg-black" 
      onChange={(event) => {
            console.log(event)
          }}/>
    </div>

<div className=" flex flex-wrap justify-center gap-6">
{topRated.map((topratedmovies) => (
    <div className="flex flex-col items-center w-40 sm:w-48 md:w-52 lg:w-60"  key={topratedmovies.id}> 
      <div>
      <img className="w-full h-auto rounded object-cover" 
       src={`https://image.tmdb.org/t/p/w500${topratedmovies.poster_path}`} 
       alt={topratedmovies.title} />
      </div>
       <div className="mt-2 text-center text-sm" >{topratedmovies.title}</div>
    </div>
    ))}

</div>
   
    
    </>
  )
}

export default TopRated
