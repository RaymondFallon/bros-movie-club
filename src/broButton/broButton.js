import React, { Component } from 'react'
import './broButton.scss'
import BroComment from '../broComment/broComment.js'

const broInitials = {
    curt: 'CF',
    frank: 'FF',
    jake: 'JB',
    ray: 'RF',
}

class BroButton extends Component {
    constructor(props) {
        super(props);
        this.movieTitle = this.props.movieTitle;
        this.bro = this.props.bro;
        this.hasReview = (Math.random() > .3);
    }

    showReview(movie) {
        return (() => alert(this.props.db.database().ref('movies/climax/year')))
    }

    render() {
        return (
            <button
                className={"broButton " + (this.hasReview ? 'with-comment' : 'empty')}
                // onClick={() => {alert('hi!')}}
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