import React from 'react';
import PropTypes from 'prop-types';
import './reviewModal.scss'

class ReviewModal extends React.Component {
    closeModal() {
        return (() => {
            document.getElementById('review-modal-backdrop').classList.add('hidden');
        })
    }

    render() {
        return (
            <div id="review-modal-backdrop"
                 className="backdrop hidden"
                 onClick={this.closeModal()}>
                <div id="review-modal" className="modal">
                    <div id="review-modal-header">
                        Title
                    </div>
                    <div id="review-modal-body">
                        Body!
                    </div>
                    <div id="review-modal-footer" className="footer">
                        <button onClick={this.closeModal()}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ReviewModal;