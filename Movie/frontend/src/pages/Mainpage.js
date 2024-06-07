import React, { useState } from 'react';
import axios from 'axios';
import Header from '../Components/Header/Header';
import Home from '../Components/Home/Home';
import Rowpost from '../Components/Rowpost/Rowpost';
import SearchResults from '../Components/Search/SearchResults';

function Mainpage() {
  const [query, setQuery] = useState(""); 
  
  const [searchResults, setSearchResults] = useState([]);

  
  const handleSearch = async (query) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/movies/search?title=${query}`);
      console.log(response )
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error fetching search results:', error);

    }
  };

  return (
    <div className="App">
      <Header query={query} setQuery={setQuery}  onSearch={handleSearch} />
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
