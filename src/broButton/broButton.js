import React, { Component } from 'react'
import './broButton.scss'
import BroComment from '../broComment/broComment.js'

const broInitials = {
    "Curt Foxworth": 'CF',
    "Frank Falisi": 'FF',
    "Jake Burbage": 'JB',
    "Ray Fallon": 'RF',
}

class BroButton extends Component {
    constructor(props) {
        super(props);
        this.movieTitle = this.props.data["movie_title"]
        this.bro = this.props.data["bro_name"];
        this.hasReview = true;
        this.review_text = this.props.data["description"];
    }

    showReview(movie) {
        return (() => alert(this.props.review_text))
    }

    render() {
        return (
            <button
                className={"broButton " + (this.hasReview ? 'with-comment' : 'empty')}
                onClick={this.hasReview ? this.showReview(this.props.movieTitle) : (() => {})}
            >
                <div className="initials">
                {broInitials[this.bro]}
                </div>
            </button>
        )
    }
}

export default BroButton;