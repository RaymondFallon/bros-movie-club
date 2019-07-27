import React, { Component } from 'react'
import './broComment.scss'

const broInitials = {
    curt: 'CF',
    frank: 'FF',
    jake: 'JB',
    ray: 'RF',
}

class BroComment extends Component {
    constructor(props) {
        super(props);
        this.movieTitle = this.props.movieTitle;
        this.bro = this.props.bro;
    }

    hasReview() {
        return (Math.random() > .3);
    }

    showReview() {
    }

    render() {
        return (
          <div
            className={"broComment " + (this.hasReview() ? '' : 'empty')}
            onClick={() => {alert('hi!')}}
            // onClick={this.hasReview() ? this.showReview() : {}}
          >
              <div class="initials">
              {broInitials[this.bro]}
              </div>
          </div>
        )
    }
}

export default BroComment;