import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import PlayLogo from "../../assets/Play.png";
import rect1 from "../../assets/Rectangle1.png";
import rect2 from "../../assets/Rectangle2.png";
import rect3 from "../../assets/Rectangle3.png";
import rect4 from "../../assets/Rectangle4.png";
import { API_BASE_URL } from "../../config.js"
import './Home.css';

function Home() {
    const [movies, setMovies] = useState([]);
    const [randomMovie, setRandomMovie] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/api/movies`);
                setMovies(response.data);
                setRandomMovie(response.data[Math.floor(Math.random() * response.data.length)]);
            } catch (err) {
                alert('Network error');
            }
        };

        fetchMovies();
    }, []);

    return (
        <div className="body">
            <div className='main-body'>
            {randomMovie && (
                <div className='poster-box'  style={{ backgroundImage: `url(${randomMovie.banner_image})` }}>
                  
                        <div className='description-box'>
                            <h1>{randomMovie.title}</h1>
                            <h3>{randomMovie.description}</h3>
                            <button className='watch-later'>
                                <img src={PlayLogo} alt="Play logo" />Watch trailer
                            </button>
                            <div className='scrolls'>
                                <img src={rect1} className="scroll" alt="Rectangle 1" />
                                <img src={rect3} className="scroll" alt="Rectangle 2" />
                                <img src={rect2} className="scroll" alt="Rectangle 3" />
                                <img src={rect4} className="scroll" alt="Rectangle 4" />
                            </div>
                        </div>
                        </div>
                    )}
              
            </div>
        </div>
    );
}

export default Home;
