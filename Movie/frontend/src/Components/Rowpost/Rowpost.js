import React, { useState, useEffect } from 'react';
import favLogo from '../../assets/favourites.png';
import favLogoRed from '../../assets/Heart.png'; 
import axios from 'axios';
import './Rowpost.css';

function Rowpost() {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://movie-backend-6mwa.onrender.com/api/movies');
        setMovies(response.data);
      } catch (err) {
        alert('Network error');
      }
    };

    fetchMovies();
  }, []);

  const handleAddFavorite = (movie) => {
    const isFavorite = favorites.some(fav => fav.id === movie.id);

    if (isFavorite) {
      alert('Movie is already in favorites');
      return;
    }

    const updatedFavorites = [...favorites, movie];
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className='row'>
      <div className='posters'>
        <h1>Movies</h1>
        <div className='row-post'>
          {movies.map((movie) => (
            <div key={movie.id} className='movie-card'>
              <div className='banner' style={{ backgroundImage: `url(${movie.banner_image})` }}>
                <button
                  className='add-fav'
                  onClick={() => handleAddFavorite(movie)}
                >
                  <img
                    src={favorites.some(fav => fav.id === movie.id) ? favLogoRed : favLogo}
                    alt="Add to Favourites"
                  />
                </button>
              </div>
              <div className='movie-content'>
                <h3>{movie.year}</h3>
                <div className='movie-title'>{movie.title}</div>
                <h3>{movie.genre}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Rowpost;
