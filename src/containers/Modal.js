import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Modal from '../components/Modal';
import PropTypes from 'prop-types';
import { goPreviousImage, goNextImage, closeModal } from '../actions';

class ModalContainer extends Component {
  static propTypes = {
    active: PropTypes.bool,
    selectedId: PropTypes.number,
    selectedImage: PropTypes.string,
    imageSet: PropTypes.arrayOf(PropTypes.object),
    closeModal: PropTypes.func,
    goPreviousImage: PropTypes.func,
    goNextImage: PropTypes.func
  };

  render () {
    const { active, selectedId, selectedImage, imageSet, goPreviousImage,
      goNextImage, closeModal } = this.props;
    const handleOnClick = (e) => { 
      e.stopPropagation(); 
      closeModal(); 
    };

    return (
      <Modal 
        selectedImage={selectedImage} 
        imageSet={imageSet}
        selectedId={selectedId}
        active={active} 
        handleOnClick={handleOnClick}
        handleGoPreviousImage={goPreviousImage} 
        handleGoNextImage={goNextImage}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    active: state.modalActive,
    selectedImage: state.selectedImage,
    selectedId: state.selectedId,
    imageSet: state.imageSet
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ goPreviousImage, goNextImage, closeModal }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);