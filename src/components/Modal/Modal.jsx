//Modal.jsx
import React, { Component } from 'react';
import css from './Styles/Modal.module.css';

import Loader from '../Loader/Loader';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { image } = this.props;
    // console.log(image);

    return (
      <div className={css.overlay} onClick={this.handleOverlayClick}>
        <div className={css.modal}>
          {image && <img src={image} alt={image.tags} className={css.image} />}
        </div>
      </div>
    );
  }
}

export default Modal;
