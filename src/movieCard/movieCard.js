import React, { Component } from 'react'
import './movieCard.scss'
import BroButton from '../broButton/broButton.js';
import BroComment from '../broComment/broComment.js';
import 'whatwg-fetch'

class MovieCard extends Component {
    constructor(props) {
        super(props);
        this.movieTitle = this.props.movieTitle;

        fetch(this.props.db.database().ref('/movies'))
            .then(function(response) {
                return response.json()
            }).then(function(json) {
                console.log('parsed json', json)
            }).catch(function(ex) {
                console.log('parsing failed', ex)
            })
    }

    render() {
        return (
            <div className={"movieCard " + this.movieTitle}>
                <BroButton bro="curt" movieTitle={this.props.movieTitle} db={this.props.db}/>
                <BroComment bro="curt" movieTitle={this.props.movieTitle} db={this.props.db}/>
                <BroButton bro="frank" movieTitle={this.props.movieTitle} db={this.props.db}/>
                <BroComment bro="frank" movieTitle={this.props.movieTitle} db={this.props.db}/>
                <BroButton bro="jake" movieTitle={this.props.movieTitle} db={this.props.db}/>
                <BroComment bro="jake" movieTitle={this.props.movieTitle} db={this.props.db}/>
                <BroButton bro="ray" movieTitle={this.props.movieTitle} db={this.props.db}/>
                <BroComment bro="ray" movieTitle={this.props.movieTitle} db={this.props.db}/>
            </div>
        )
    }
}

export default MovieCard;