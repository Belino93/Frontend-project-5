import React from "react";
import { useState, useEffect } from "react"
import axios from "axios";

const FilmsCards = () => {
  const [movies, setMovies] = useState([])
  const bringMovies = async () => {

    const movies = await axios.get("http://localhost:3005/movie")
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


const FilmsCards = ({ movies }) => {
  return (
    <div className="container">
      {/* <div className="row">
        {movies.map((item, index) => (
          <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="card" style={{ minWidth: "200px" }}>
              <img className="card-img-top" src={item.poster} alt="poster" />
              <div className="card-body">
                <h5 className="card-title">Title{item.title}</h5>
                <hr />
                <p className="card-text">Genre: {item.genre}</p>
                <p className="card-text">ID movie: {item.movie_id.movies}</p>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );

};

export default FilmsCards;