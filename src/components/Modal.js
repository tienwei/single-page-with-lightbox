import React from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';

const Modal = ({ active = false, selectedId = 0, selectedImage = '', imageSet = [],
  handleOnClick, handleGoPreviousImage, handleGoNextImage }) => {
  const modifier = active ? 'modal--active': '';
  const goPrevious = (id) => (e) => {
    e.stopPropagation();
    handleGoPreviousImage(id, imageSet);
  }
  const goNext = (id) => (e) => {
    e.stopPropagation();
    handleGoNextImage(id, imageSet);
  }
  const getCurrentImg = () => (imageSet.filter((img) => img.id === selectedId)[0]);

  const view = imageSet.length > 0
    ? (<div className={`modal ${modifier} modal--gallery`} onClick={handleOnClick}>
        <button className='modal--gallery__nav' onClick={goPrevious(selectedId)}><span>{`<`}</span></button>
        <img 
          className='modal__image' 
          src={ getCurrentImg().img } alt='modal'
          onClick={(e) => e.stopPropagation()} />
        <button className='modal--gallery__nav' onClick={goNext(selectedId)}><span>{`>`}</span></button>
      </div>)
    : (<div className={`modal ${modifier}`} onClick={handleOnClick}>
        <img 
          className='modal__image' 
          src={ selectedImage } alt='modal'
          onClick={(e) => e.stopPropagation()} />
      </div>); 
  return view;
};

Modal.propTypes = {
  active: PropTypes.bool,
  selectedId: PropTypes.number,
  selectedImage: PropTypes.string,
  handleOnClick: PropTypes.func,
  handleGoPreviousImage: PropTypes.func,
  handleGoNextImage: PropTypes.func,
};

export default Modal;