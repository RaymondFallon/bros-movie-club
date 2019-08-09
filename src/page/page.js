import React, { Component } from 'react'
import './page.scss'
import MovieCard from '../movieCard/movieCard.js'
import axios from 'axios';
import { thisExpression } from '@babel/types';

class Page extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        error: null,
        isLoaded: false,
        items: []
    };

    componentDidMount() {
        axios.get("https://bros-movie-api.herokuapp.com/movies").then(
            result => {
                this.setState({
                    isLoaded: true,
                    items: result.data["data"]
                });
            },
            error => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        );
    }
    
    render() {
        return (
            <div className="Page">
                {/* {console.log('hiii')}
                {console.log(this.state.items)} */}
                {this.state.items.map((movie, idx) => <MovieCard data={movie} /> )}
                {/* <MovieCard movieTitle="midsommar" data={movie_data["midsommar"]} />
                <MovieCard movieTitle="climax" data={movie_data["climax"]} /> */}
            </div>
        )
    }
}

export default Page;