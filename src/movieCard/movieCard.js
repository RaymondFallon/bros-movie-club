import React, { Component } from 'react'
import './movieCard.scss'
import BroButton from '../broButton/broButton.js';
import BroComment from '../broComment/broComment.js'

class MovieCard extends Component {
    constructor(props) {
        super(props);
        this.movieTitle = this.props.data["title"];
        this.reviews = this.props.data["reviews"];
    }

    render() {
        return (
            <div>
                <div className={"movieCard " + this.movieTitle}>
                    <BroButton bro="curt" movieTitle={this.props.movieTitle} review={this.reviews["curt"]}/>
                    <BroComment bro="curt" movieTitle={this.props.movieTitle} review={this.reviews["curt"]}/>
                    <BroButton bro="frank" movieTitle={this.props.movieTitle} review={this.reviews["frank"]}/>
                    <BroComment bro="frank" movieTitle={this.props.movieTitle} review={this.reviews["frank"]}/>
                    <BroButton bro="jake" movieTitle={this.props.movieTitle} review={this.reviews["jake"]}/>
                    <BroComment bro="jake" movieTitle={this.props.movieTitle} review={this.reviews["jake"]}/>
                    <BroButton bro="ray" movieTitle={this.props.movieTitle} review={this.reviews["ray"]}/>
                    <BroComment bro="ray" movieTitle={this.props.movieTitle}  review={this.reviews["ray"]}/>
                </div>
                <h2>{this.movieTitle}</h2>
            </div>
        )
    }
}

export default MovieCard;