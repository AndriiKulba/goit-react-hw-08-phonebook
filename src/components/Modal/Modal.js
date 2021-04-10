import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.toggleModal();
    }
  };
  OnBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.toggleModal();
    }
  };
  render() {
    const { activeImage, toggleModal } = this.props;
    const { url, tag } = activeImage;
    return (
      <div className={s.Overlay} onClick={this.OnBackdropClick}>
        <div className={s.Modal}>
          <img src={url} alt={tag} />
        </div>
        <button
          type="button"
          className={s.ModalBtn}
          onClick={toggleModal}
        ></button>
      </div>
    );
  }
}
Modal.propTypes = {
  url: PropTypes.string,
  tag: PropTypes.string,
  toggleModal: PropTypes.func.isRequired,
};
export default Modal;
