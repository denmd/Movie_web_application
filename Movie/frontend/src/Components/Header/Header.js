// Header.js

import React, { useState } from 'react';
import axios from 'axios';
import './Header.css';
import MovieLogo from "../../assets/movie.png";
import SearchLogo from "../../assets/search-lg.png";
import FavourLogo from "../../assets/favourites.png";
import { useNavigate, useLocation } from 'react-router-dom';
import CrossLogo from "../../assets/cross.png";

const Header = ({ onReceiveSearchResults }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    handleSearch();
  };

  const handleClearSearch = () => {
    setQuery(""); 
    window.location.reload();

  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://movie-backend-6mwa.onrender.com/api/movies/search?title=${query}`);
      // Pass the search results to the callback function
      onReceiveSearchResults(response.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  

  return (
    <header className="header">
      <div className='search-content'>
        <div className='icon-title'>
          <div className='icon'>
            <img src={MovieLogo} alt="Movie Logo" />
          </div>
          <h3>GET MOVIES</h3>
        </div>
        <div className="search-bar">
          <img src={SearchLogo} alt="Search Logo" onClick={handleSearch} />
          <input
            type="text"
            placeholder="Search movies and series"
            value={query}
            onChange={handleInputChange}
          />
          {query && ( 
            <img 
              src={CrossLogo} 
              alt="Clear Search"
              className="clear-search-icon"
              onClick={handleClearSearch}
            />
          )}
        </div>
      </div>
      {location.pathname !== '/favorites' && (
        <button className="favourites-button" onClick={() => navigate('/favorites')}>
          <img src={FavourLogo} alt="Favourites Logo" />
          My Favourites
        </button>
      )}
    </header>
  );
};

export default Header;
