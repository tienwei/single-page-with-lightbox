import React from 'react';
import PropTypes from 'prop-types';
import './Article.scss';

const Article = ({ imageSrc, title='', content='', modifier='', handleOnclick }) => (
  <article 
    className={`article ${modifier}`} 
    style={{ backgroundImage: `url(${imageSrc})` }}
    onClick={ handleOnclick }
  >
    {title !== '' ? <h3 className='article__title'>{title}</h3>: ''}
    {content !== ''? <p className='article__content'>{content}</p>: ''}
  </article>
);

Article.propTypes = {
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  modifier: PropTypes.string,
  handleOnclick: PropTypes.func
};

export default Article;