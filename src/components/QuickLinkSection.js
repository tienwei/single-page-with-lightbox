import React from 'react';
import PropTypes from 'prop-types';
import './QuickLinkSection.scss';
import ArticleContainer from '../containers/Article';

const QuickLinkSection = ({ imageSet }) => {
  return (
    <section className='quick-link-section'>
        {imageSet.map(imgData => {
          return <ArticleContainer 
            modifier='article--quicklink'
            key={imgData.id}
            className='quick-link-section__image' 
            selectedId={imgData.id}
            imageSet={imageSet} 
            content={imgData.content} />;
        })}
    </section>
  );
}

QuickLinkSection.propTypes = {
  imageSet: PropTypes.arrayOf(PropTypes.object)
}

export default QuickLinkSection;