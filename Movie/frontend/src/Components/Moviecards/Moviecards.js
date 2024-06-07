import React from 'react';
import './Moviecards.css';
import favLogo from "../../assets/Heart.png";
import nofavLogo from "../../assets/favourites.png";

const Moviecards = ({ results }) => {

  const favourites = JSON.parse(localStorage.getItem('favorites')) || [];

  const isFavorite = (movieId) => {
    return favourites.some(movie => movie.id === movieId);
  };

  return (
    <div className="movie-poster">
      {results.map((result, index) => (
        <div key={index} className='fav-movie-card'>
          <div className='banner' style={{ backgroundImage: `url(${result.banner_image})` }}>
            <button className='add-fav'>
              <img src={isFavorite(result.id) ? favLogo : nofavLogo} alt="Add to Favourites" />
            </button>
          </div>
          <div className='movie-content'>
            <h3>{result.year}</h3>
            <div className='movie-title'>{result.title}</div>
            <h3>{result.genre}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Moviecards;
