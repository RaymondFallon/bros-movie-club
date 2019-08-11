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
        this.movieTitle = this.props.data["movie_title"];
    }

    state = {
        bro: this.props.data["attributes"]["bro-name"],
        review_text: this.props.data["attributes"]["description"]
    };

    showReview(movie) {
        return (() => {
            let header = document.getElementById('review-modal-header');
            let body = document.getElementById('review-modal-body');
            let backdrop = document.getElementById('review-modal-backdrop');
            header.innerText = this.state.bro;
            body.innerText = this.state.review_text;
            backdrop.classList.remove('hidden');
        })
    }

    render() {
        return (
            <button
                className={"broButton " + this.state.bro.replace(' ', '-')}
                onClick={this.showReview(this.props.movieTitle)}
            >
                <div className="initials">
                {broInitials[this.state.bro]}
                </div>
            </button>
        )
    }
}

export default BroButton;