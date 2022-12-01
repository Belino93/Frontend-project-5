import React from "react";
import { useSelector } from "react-redux";
import { filmData } from "../Films/filmSlice";

function FilmDetail() {
  const selectedFilm = useSelector(filmData);

  if (selectedFilm?.movie_id !== undefined) {
    console.log(selectedFilm.movie_id);
    return(
        <div className="container">
            <div className="film-Container">
                
            </div>
        </div>
    )
  }

  return <div>404 NOT FOUND</div>;
}

export default FilmDetail;
