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
                {this.state.items.map((movie, idx) => <MovieCard data={movie} key={idx} /> )}
            </div>
        )
    }
}

export default Page;