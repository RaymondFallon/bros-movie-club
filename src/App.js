import React from 'react';
import MovieCard from './movieCard/movieCard.js'
import './App.css';
import * as movies from './movies.json'

function App() {

  console.log(movies);
  console.log(movies["default"]);
  var movie_data = movies["default"]
  // var movie_data = JSON.parse(movies);

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>
        <MovieCard movieTitle="midsommar" data={movie_data["midsommar"]}/>
        <MovieCard movieTitle="climax" data={movie_data["climax"]}/>
      </body>
    </div>
  );
}

export default App;
