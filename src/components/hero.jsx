
import { useState } from "react";
import { MovieContext } from "../context/Moviecontext";
import { useContext } from "react";


const Hero = () => {

  const { movie } = useContext(MovieContext)


  const featuredMovie = movie[0];

  const backgroundImageUrl = featuredMovie 
  ? `url(https://image.tmdb.org/t/p/original${featuredMovie.backdrop_path})`
  : `url('/lastofus.jpg')`; 

    return (
        <>
        
      <div  
        className="h-1/2 md:h-screen bg-cover bg-center flex justify-start items-center"  style={{ backgroundImage: backgroundImageUrl }} >
        <div className="text-white text-left mt-28  pl-4">
            <p className="bg-black rounded-3xl w-14 md:w-16 text-center mb-2 md:mb-6">series</p>
            <h1 className="text-2xl font-bold mb-2 md:mb-6 md:text-5xl ">
              {featuredMovie ? featuredMovie.title: 'Loading...'}
            </h1>


            <p className=" text-sm w-full md:w-1/2 lg:w-1/2 pl-2 pr-6 mb-4 md:mb-6">
            {featuredMovie ? featuredMovie.overview : 'Loading'}
            </p>

            <p className=" text-sm pl-2 mb-4 md:mb-6">
            {featuredMovie ? featuredMovie.release_date : 'Loading'}
            </p>
            <button className=" flex items-center mb-4 font-bold bg-red-700 text-white text-sm md:text-lg px-8 py-2 md:px-6 md:py-2 rounded-xl"> 
                <img className="border-2 rounded mr-2" src="/play-icon.png"/> Watch
                </button>

         
        </div>
      </div>

     
{/* 
          <div className=" mt-6 mb-2">
            <h4 className="font-bold text-lg">Top cast</h4>
          </div> */}
      </>
    );
  };
  
  export default Hero;
  