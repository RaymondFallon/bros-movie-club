import React from 'react';
import MovieCard from './movieCard/movieCard.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>
        <MovieCard movieTitle="midsommar"/>
        <MovieCard movieTitle="climax"/>
      </body>
    </div>
  );
}

export default App;
