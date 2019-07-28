import React, { Component } from 'react'
import './movieCard.scss'
import BroButton from '../broButton/broButton.js';
import BroComment from '../broComment/broComment.js'

class MovieCard extends Component {
    constructor(props) {
        super(props);
        this.movieTitle = this.props.movieTitle;
    }

    render() {
        return (
            <div className={"movieCard " + this.movieTitle}>
                <BroButton bro="curt" movieTitle={this.props.movieTitle}/>
                <BroComment bro="curt" movieTitle={this.props.movieTitle}/>
                <BroButton bro="frank" movieTitle={this.props.movieTitle}/>
                <BroComment bro="frank" movieTitle={this.props.movieTitle}/>
                <BroButton bro="jake" movieTitle={this.props.movieTitle}/>
                <BroComment bro="jake" movieTitle={this.props.movieTitle}/>
                <BroButton bro="ray" movieTitle={this.props.movieTitle}/>
                <BroComment bro="ray" movieTitle={this.props.movieTitle}/>
            </div>
        )
    }
}

export default MovieCard;