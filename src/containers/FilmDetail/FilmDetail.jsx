import React from "react";
import { useSelector } from "react-redux";
import { filmData } from "../Films/filmSlice";
import { useNavigate } from "react-router-dom";
import {newLease} from '../../services/apiCalls'

function FilmDetail() {
  const navigate = useNavigate();
  const jwt = localStorage.getItem("token")
  const selectedFilm = useSelector(filmData);

  const clickHandler = (film_id) => {
    newLease(jwt,film_id)
    .then((res) => {console.log(res);})
    .catch((error) => {console.log(error);});
    navigate('/films')
  };

  if (selectedFilm?.movie_id !== undefined) {
    console.log(selectedFilm.movie_id);
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
          <button onClick={() => clickHandler(selectedFilm.movie_id)}>
            Rent
          </button>
        </div>
      );
    }
    return (
      <div className="container">
        <div className="film-Container">
          <img src={`https://image.tmdb.org/t/p/w200/${selectedFilm.poster}`} />
          <h1>{selectedFilm.title}</h1>
          <p>{selectedFilm.overview}</p>
        </div>
        <button onClick={() => navigate('/login')}>Rent</button>
      </div>
    );
  }

  return <div>404 NOT FOUND</div>;
}

export default FilmDetail;
