import React, { Component } from 'react'
import './movieCard.scss'
import BroComment from '../broComment/broComment.js';

class MovieCard extends Component {
    constructor(props) {
        super(props);
        this.movieTitle = this.props.movieTitle;
    }

    render() {
        return (
            <div className={"movieCard " + this.movieTitle}>
                <BroComment bro="curt"/>
                <BroComment bro="frank"/>
                <BroComment bro="jake"/>
                <BroComment bro="ray"/>
            </div>
        )
    }
}

export default MovieCard;