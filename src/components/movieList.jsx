
import useEmblaCarousel from "embla-carousel-react"
import { MovieContext } from "../context/Moviecontext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const MovieList = () => {
 const {movie, tvShows, popular, topRated, upComing} = useContext(MovieContext)


return(

  <div className="mt-10 px-2 lg:px-8 md:px-2">

 <>
 <Link to='/latest-release'>
 <div className="flex gap-4">
<h2 className="text-lg "> <strong className="text-red-700">Latest</strong> release  </h2>
<img src="/arrowIcon.png" />
</div>
 </Link>
 <EmblaCarousel movie={movie} />
 </>


<>
<Link to='/latest-release'>
<div className="flex gap-4 mt-10">
<h2 className="text-lg "> <strong className="text-red-700">Popular</strong> </h2>
<img src="/arrowIcon.png" />
</div>
</Link>

<EmblaCarousel movie={popular} />
</>


<>
<Link to='/top-rated'>
<div className="flex gap-4 mt-10">
<h2 className="text-lg "> <strong className="text-red-700">Top</strong> rated  </h2>
<img src="/arrowIcon.png" />
</div>
</Link>

<EmblaCarousel movie={topRated} />
</>

<>
<Link to='/upcoming'>
<div className="flex gap-4 mt-10">
<h2 className="text-lg "> <strong className="text-red-700">UpComing</strong>   </h2>
<img src="/arrowIcon.png" />
</div>
</Link>
<EmblaCarousel movie={upComing} />
</>


<>
<Link to='/tv-shows'>
<div className="flex gap-4 mt-10">
<h2 className="text-lg "> <strong className="text-red-700">Tv</strong> Shows </h2>
<img className="" src="/arrowIcon.png"/>
</div>
<EmblaCarousel2 movie={tvShows}/>
</Link>
</>

</div>


)
 
}


export function EmblaCarousel({ movie }) {
  const [emblaRef] = useEmblaCarousel()

  return (
    <div className="embla relative " ref={emblaRef}>

      <div className="embla__container  justify-between mt-6">
      {movie.map((movies) => (
    <div className="embla__slide basis-40 sm:basis-custom162 md:basis-44 lg:basis-40" key={movies.id}>
      <img className="w-36 rounded" src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`} alt={movies.title} />
      <h2 className="text-sm mt-2">{movies.title}</h2>
      <span>({movies.release_date})</span>
    </div>
  ))}

      </div>

    </div>
  )
}



export function EmblaCarousel2({ movie }) {
  const [emblaRef] = useEmblaCarousel()

  return (
    <div className="embla " ref={emblaRef}>

      <div className="embla__container  justify-between mt-6">
      {movie.map((movies) => (
    <div className="embla__slide basis-72 " key={movies.id}>
      <img className="w-custom-270 h-80 rounded" src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`} alt={movies.title} />
     <div className="absolute top-0 bg-opacity-70 bg-black text-white p-2">
     <span>{movies.original_language}</span>
     </div>
    </div>
  ))}

      </div>
     
      
    </div>
  )
}




export default MovieList
