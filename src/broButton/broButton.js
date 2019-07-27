import React, { Component } from 'react'
import './broButton.scss'

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

    showReview(text) {
        return (() => alert(text))
    }

    render() {
        return (
            <div
                className={"broButton " + (this.hasReview ? '' : 'empty')}
                // onClick={() => {alert('hi!')}}
                onClick={this.hasReview ? this.showReview(this.props.movieTitle) : {}}
            >
                <div class="initials">
                {broInitials[this.bro]}
                </div>
            </div>
        )
    }
}

export default BroButton;