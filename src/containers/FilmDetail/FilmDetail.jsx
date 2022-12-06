import React from "react";
import { useSelector } from "react-redux";
import { filmData } from "../Films/filmSlice";
import { useNavigate } from "react-router-dom";
import { newLease, getLeaseById } from "../../services/apiCalls";
import { useState, useEffect } from "react";
import './FilmDetail.css'

function FilmDetail() {
  const navigate = useNavigate();
  const jwt = localStorage.getItem("token");
  const selectedFilm = useSelector(filmData);
  const [leases, setLeases] = useState([]);
  const [isRented, setIsRented] = useState(false);

  const clickHandler = (film_id) => {
    newLease(jwt, film_id)
      .then((res) => {
        
      })
      .catch((error) => {
        
      });
    navigate("/films");
  };

  const isRentedFunction = (leaseMoviId) => {
    if (leaseMoviId === selectedFilm.movie_id) {
      return setIsRented(true);
    } else {
      return false;
    }
  };

  useEffect(() => {
    getLeaseById(jwt).then((leaseData) => {
      if (leaseData !== undefined) {
        leaseData.data.map((lease) => {
          isRentedFunction(lease.movie_id)
        })
      }else{
        return
      }
    })
    .catch((error) =>{return console.log('hola')});

  }, []);
  
  if (selectedFilm?.movie_id !== undefined && isRented === true) {
    if (localStorage.getItem("token")) {
      return (
        <div className="container">
          <div className="film-Container">
            <img
              src={`https://image.tmdb.org/t/p/w200/${selectedFilm.poster}`}
            />
            <h1>{selectedFilm.title}</h1>
            <p>{selectedFilm.overview}</p>
          </div>
        </div>
      );
    }}
  if (selectedFilm?.movie_id !== undefined && !localStorage.getItem("token")) {
    if (localStorage.getItem("token")) {
      return (
        <div className="container">
          <div className="film-Container">
            <img
              src={`https://image.tmdb.org/t/p/w200/${selectedFilm.poster}`}
            />
            <h1>{selectedFilm.title}</h1>
            <p>{selectedFilm.overview}</p>
          </div>
        </div>
      );
    }}

  if (selectedFilm?.movie_id !== undefined && localStorage.getItem("token")) {
      return (
        <div className="container">
          <div className="film-Container">
            <img
              src={`https://image.tmdb.org/t/p/w200/${selectedFilm.poster}`}
            />
            <h1>{selectedFilm.title}</h1>
            <p>{selectedFilm.overview}</p>
            <button onClick={() => clickHandler(selectedFilm.movie_id)}>
            Rent
          </button>
          </div>
        </div>
      );
  }
  
  if (selectedFilm?.movie_id !== undefined) {
      return (
        <div className="container">
          <div className="film-Container">
            <img
              src={`https://image.tmdb.org/t/p/w200/${selectedFilm.poster}`}
            />
            <h1>{selectedFilm.title}</h1>
            <p>{selectedFilm.overview}</p>
          </div>
        </div>
      );
    }

  return <div>404 NOT FOUND</div>;
}

export default FilmDetail;
