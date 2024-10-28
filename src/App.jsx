
import { MovieProvider } from "./context/Moviecontext";
import { Routes, Route } from "react-router-dom";
import './App.css'


import Navbar from "./components/navbar"
import Footer from './components/footer'
import Upcomingshows from "./routes/upcoming";

import Home from "./routes/home";
import LatestRelease from "./routes/latestRelease";
import Tvshows from "./routes/tvshows";
import TopRated from "./routes/toprated";

 
const App = () => {

  return (
    <MovieProvider>
      <Navbar />
     
    
    
    <Routes>
      
     <Route path="/" element={<Home />} />
     <Route path="/upcoming" element={<Upcomingshows />}/>
     <Route path="/latest-release" element={<LatestRelease />}/>
     <Route path="/tv-shows" element={<Tvshows />}/>
     <Route path="/top-rated" element={<TopRated />}/>


   
   </Routes>
  <Footer />
    </MovieProvider>
 
    
  )
}

export default App


