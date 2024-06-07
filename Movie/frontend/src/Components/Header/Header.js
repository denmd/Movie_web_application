import React, { useState } from 'react';
import axios from 'axios';
import './Header.css';
import MovieLogo from "../../assets/movie.png";
import SearchLogo from "../../assets/search-lg.png";
import FavourLogo from "../../assets/favourites.png";
import { useNavigate,useLocation } from 'react-router-dom';
import CrossLogo from "../../assets/cross.png"
const Header = ({ query, setQuery, onSearch }) => {
  const navigate=useNavigate()
  const location = useLocation();
    const handleInputChange = (e) => {
      setQuery(e.target.value);
      onSearch(e.target.value); 
    };

    
  const handleClearSearch = () => {
    setQuery(""); 
    window.location.reload();
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
                    <img src={SearchLogo} alt="Search Logo" />
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
                onClick={()=>handleClearSearch()}
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
