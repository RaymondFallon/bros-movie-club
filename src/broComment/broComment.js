import React, { Component } from 'react'
import './broComment.scss'

class BroComment extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="broComment">
                {this.props.review}
            </div>
        )
    }
}

export default BroComment;