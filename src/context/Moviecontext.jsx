import React, { useEffect, useState, createContext } from 'react';


//enable a provider component
//PROVIDER COMPONENT 
// 1. import { createContext } from 'react
//2. export const Mycontext  = createContext()
//3. <Mycontext.provider value={value}>
      //<Child />
//    <Mycontext.Provider>


//CONSUMER COMPONENT
// import React { useContext } from react 
// import Mycontext from first or parent file
// const value = useContext(Mycontext)

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {

    const [movie, setMovie] = useState([]);
    const [tvShows, settvShows] = useState([]);
    const [popular, setPopular] = useState([]);
    const [topRated, setToprated] = useState([]);
    const [upComing, setUpcoming] = useState([]);

    //fetching the movie 
    const asyncFunction = async () => {
        const movieRes=   await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=fb71589f5f35bddaea85945b8faf52df`);
        const movie = await movieRes.json();
        setMovie(movie.results)

        const tvshowsRes = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=fb71589f5f35bddaea85945b8faf52df`)
        const tvShows = await tvshowsRes.json()
        settvShows(tvShows.results)

        const popularmovieRes = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=fb71589f5f35bddaea85945b8faf52df`)
        const popular = await popularmovieRes.json()
        setPopular(popular.results)


        const topRatedmovieRes = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=fb71589f5f35bddaea85945b8faf52df`)
        const topRated = await topRatedmovieRes.json()
        setToprated(topRated.results)


        const upcomingMovieRes = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=fb71589f5f35bddaea85945b8faf52df`)
        const upComing = await upcomingMovieRes.json()
        setUpcoming(upComing.results)

        console.log("Movies", movie.results);
        console.log("popular", popular.results);
        console.log("toprated", topRated.results);
        console.log("upcoming", upComing.results);
      
      
        }
      
        useEffect(() => {
          asyncFunction()
        }, [])
      

    return(

        <MovieContext.Provider value={{ movie, tvShows, popular, topRated, upComing}}>
            {children}
        </MovieContext.Provider>
    )



}