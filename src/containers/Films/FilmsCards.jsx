import React from "react";

const FilmsCards = ({ movies }) => {
  return (
    <div className="container">
      <div className="row">
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
      </div>
    </div>
  );
};

export default FilmsCards;