import React from "react";
import { useState, useEffect } from "react"
import {bringMovies} from '../../services/apiCalls'
import './FilmsCards.css'
import { Spinner } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {addFilm} from './filmSlice'

const FilmsCards = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [movies, setMovies] = useState([])


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

  // Handlers
  const clickHandler = (film) => {

    dispatch(addFilm({...film, details: film}));

    navigate('/filmDetails')

  }

  if (movies.length > 0){
    return (
      <div className="film-container">
        {movies.map((movie, index) =>{
      return(
          <div className="film-card" key={index} onClick={() => {clickHandler(movie)}} >
            <img className="" src={`https://image.tmdb.org/t/p/w200/${movie.poster}`} alt="Poster" />
          
            <p className="" src="">{movie.title.slice(0, 20) + "..."}</p>

          </div>
)        })}
      </div>
    );

  }
return (
  <div className="film-container"><Spinner animation="border" variant="white"/></div>
)
};

export default FilmsCards;