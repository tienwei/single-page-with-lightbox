import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Article from '../components/Article';
import { closeModal, openModal, openGallery } from '../actions';

const ArticleContainer = ({ modifier = '', imageSrc = '', selectedId = 0, imageSet = [], title = '', content = '',
  openModal, openGallery }) => {
  const handleOnclick = imageSet.length > 0 
    ? (e) => {closeModal(); openGallery(selectedId, imageSet)}
    : (e) => {closeModal(); openModal(imageSrc)}; 

  return (
    <Article
      modifier={modifier}
      imageSrc={imageSrc} 
      imageSet={imageSet}
      selectedId={selectedId}
      title={title}
      content={content}
      handleOnclick={handleOnclick} />
  );
}

ArticleContainer.propTypes = {
  modifier: PropTypes.string,
  selectedId: PropTypes.number,
  imageSrc: PropTypes.string,
  imageSet: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  content: PropTypes.string,
  openModal: PropTypes.func
};

const mapStateToProps = (state, { modifier, selectedId, imageSrc, imageSet, title, content }) => {
  return { modifier, selectedId, imageSrc, imageSet, title, content };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ closeModal, openModal, openGallery }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleContainer);