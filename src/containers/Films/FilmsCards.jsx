import React from "react";
import { useState, useEffect, useCallback } from "react"
import { bringMovies, bringByTitle } from '../../services/apiCalls'
import './FilmsCards.css'
import { Spinner } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addFilm } from './filmSlice'
import { debounce } from "lodash";


const FilmsCards = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState([])


  useEffect(() => {
    if (movies.length === 0) {
      bringMovies()
        .then((movies) => {
          return setMovies(movies.data)

        })
        .catch((error) => {return})
    }
  })

  // Handlers
  const clickHandler = (film) => {
    dispatch(addFilm({ ...film, details: film }));
    navigate('/filmDetails')
  }

  const inputHandler = debounce((value) => {
    bringByTitle(value).then((res) => setSearch(res.data))
  }, 500);

  if ((movies.length > 0) && (search.length > 0)) {
    return (
      <div className="main-container">
        <div className="search-box-container"><input className="search-box" placeholder="search..." onChange={(e) => inputHandler(e.target.value)}></input></div>
        <div className="film-container">
          {search.map((movie, index) => {
            return (
              <div className="film-card" key={index} onClick={() => { clickHandler(movie) }} >
                <img className="" src={`https://image.tmdb.org/t/p/w200/${movie.poster}`} alt="Poster" />

                <p className="" src="">{movie.title.slice(0, 20) + "..."}</p>

              </div>
            )
          })}
        </div>
      </div>
    );
  }

  if (movies.length > 0) {
    return (


      <div className="film-container">
        <div className="main-container">
          <div className="search-box-container"><input className="search-box" placeholder="search..." onChange={(e) => inputHandler(e.target.value)}></input></div>
          <div className="film-container">

            {movies.map((movie, index) => {
              return (
                <div className="film-card" key={index} onClick={() => { clickHandler(movie) }} >
                  <img className="" src={`https://image.tmdb.org/t/p/w200/${movie.poster}`} alt="Poster" />

                  <p className="title-text my-2" src="">{movie.title.slice(0, 20) + "..."}</p>


                </div>
              )
            })}
          </div>
        </div>
        
      </div>
  )}
  return (
    <div className="film-container"><Spinner animation="border" variant="white" /></div>
  )
};

export default FilmsCards;