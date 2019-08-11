import React, { Component } from 'react'
import './movieCard.scss'
import BroButton from '../broButton/broButton.js';
import BroComment from '../broComment/broComment.js'
import axios from 'axios';

class MovieCard extends Component {
    constructor(props) {
        super(props);
        this.movieTitle = this.props.data["attributes"]["title"];
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
                <div className={"movieCard " + this.movieTitle}>
                    {this.state.reviews.map((review, idx) => <BroButton data={review} key={idx} />)}
                    {/* <BroButton bro="curt" movieTitle={this.props.movieTitle} review={this.reviews["curt"]}/>
                    <BroComment bro="curt" movieTitle={this.props.movieTitle} review={this.reviews["curt"]}/>
                    <BroButton bro="frank" movieTitle={this.props.movieTitle} review={this.reviews["frank"]}/>
                    <BroComment bro="frank" movieTitle={this.props.movieTitle} review={this.reviews["frank"]}/>
                    <BroButton bro="jake" movieTitle={this.props.movieTitle} review={this.reviews["jake"]}/>
                    <BroComment bro="jake" movieTitle={this.props.movieTitle} review={this.reviews["jake"]}/>
                    <BroButton bro="ray" movieTitle={this.props.movieTitle} review={this.reviews["ray"]}/>
                    <BroComment bro="ray" movieTitle={this.props.movieTitle}  review={this.reviews["ray"]}/> */}
                </div>
                <h2>{this.movieTitle}</h2>
            </div>
        )
    }
}

export default MovieCard;