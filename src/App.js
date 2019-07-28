import React from 'react';
import MovieCard from './movieCard/movieCard.js'
import './App.css';
import firebase from 'firebase';
// import { tsConstructorType } from '@babel/types';

function App() {

  var firebaseConfig = {
    apiKey: "AIzaSyAasOY923ruZMG7bkin7asYzYEtJzQOfEk",
    authDomain: "bros-movie-club.firebaseapp.com",
    databaseURL: "https://bros-movie-club.firebaseio.com",
    projectId: "bros-movie-club",
    storageBucket: "",
    messagingSenderId: "1089997591376",
    appId: "1:1089997591376:web:1cc06454dc387b07"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>
        <MovieCard movieTitle="midsommar" db={firebase}/>
        {/* <MovieCard movieTitle="climax" db={firebase}/> */}
      </body>
    </div>
  );
}

export default App;
