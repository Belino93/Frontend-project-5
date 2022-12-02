import React from "react";
import { useState, useEffect } from "react"
import axios from "axios";

const FilmsCards = () => {
  const [movies, setMovies] = useState([])
  const bringMovies = async () => {

    const movies = await axios.get("http://localhost:3006/movie")
    return movies
  }
  useEffect(() => {
    if(movies.length === 0){
      bringMovies()
    .then ((movies) =>{
      console.log(movies.data);
      return setMovies(movies.data)
      
    })
    .catch (Error);
    }
    

  } )

  if (movies.length > 0){
    return (
      <div>
        {movies.map((movie) =>{
      return(
          <div className="film-card">
            <img className="" src={`https://image.tmdb.org/t/p/w200/${movie.poster}`} alt="Poster" />
          
            <h3 className="" src="">{movie.title}</h3>

          </div>
)        })}
      </div>
    );

  }
return (
  <div><h1>pelis</h1></div>
)
};

export default FilmsCards;