require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');


const port= process.env.PORT         
app.use(cors());
const movies = require('./movies.json');
app.use(express.json());
let favorites = [];


app.get('/api/movies', (req, res) => {
  res.json(movies);
});


app.get('/api/movies/search', (req, res) => {
  const { title } = req.query;
  if (!title) {
    return res.status(400).send('Title query parameter is required');
  }
  
  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(title.toLowerCase())
  );
  
  res.json(filteredMovies);
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
