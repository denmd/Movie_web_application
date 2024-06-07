import React from 'react';
import './SearchResults.css'; 
import favLogo from "../../assets/favourites.png"
import Moviecards from '../Moviecards/Moviecards';

const SearchResults = ({  results }) => {
    console.log(results)
  return (
    <div className="search-results">
      <h2 className="search-title">Search</h2>
      <p className="results-count"> {results.length} result found</p>
      <>  <Moviecards results={results} /></>
    </div>
  );
};

export default SearchResults;
