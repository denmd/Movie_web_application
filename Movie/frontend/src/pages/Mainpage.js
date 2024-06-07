
import React, { useState } from 'react';
import Header from '../Components/Header/Header';
import Home from '../Components/Home/Home';
import Rowpost from '../Components/Rowpost/Rowpost';
import SearchResults from '../Components/Search/SearchResults';
import './Mainpage.css'
import axios from 'axios';

function Mainpage() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSetSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <div className="main-element">
      <Header onReceiveSearchResults={handleSetSearchResults} /> 
      {searchResults && searchResults.length > 0 ? (
        <SearchResults results={searchResults} />
      ) : (
        <>
          <Home />
          <Rowpost />
        </>
      )}
    </div>
  );
}

export default Mainpage;
