import React, { Component } from 'react'
import './movieCard.scss'
import BroButton from '../broButton/broButton.js';
import axios from 'axios';

class MovieCard extends Component {
    constructor(props) {
        super(props);
        this.movieTitle = this.props.data["attributes"]["title"];
        this.photoUrl = this.props.data["attributes"]["photo-url"];
        this.reviews_url = this.props.data["relationships"]["reviews"]["links"]["related"];
    }

    state = {
        error: null,
        isLoaded: false,
        reviews: []
    };

    componentDidMount() {
        axios.get(this.reviews_url).then(
            result => {
                this.setState({
                    isLoaded: true,
                    reviews: result.data["data"]
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
            <div>
                <div className={"movieCard " + this.movieTitle.replace(/[\s]/g, '-').replace("'", '')}>
                    <img src={this.photoUrl} alt={this.movieTitle} className="movie-poster" />
                    {this.state.reviews.map((review, idx) => <BroButton data={review} key={idx} />)}
                </div>
                <h2 className="sr-only">{this.movieTitle}</h2>
            </div>
        )
    }
}

export default MovieCard;