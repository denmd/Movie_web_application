import React  from 'react';
import Mainpage from './pages/Mainpage';
import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Favorite from './pages/Favorite/Favourite';

function App() {
  
  

  return (
    <div className="App">
          <Router>
      <Routes>
      
      <Route  path="/"  element={<Mainpage />} />
      <Route path="/favorites" element={<Favorite />} />
      </Routes>
    </Router>

    </div>
  );
}

export default App;
