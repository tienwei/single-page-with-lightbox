import React from 'react';
import PropTypes from 'prop-types';
import './TextImageSection.scss';
import ArticleContainer from '../containers/Article';
import artileImg from '../assets/images/placeholder.png';

const TextImageSection = ({ title, content }) => {
  return (
    <section className='text-image-section'>
      <article className='article-container text-image-section__article'>
        <h3 className='article-container__title article-container__title'>{title}</h3>
        <p className='article-container__content'>{content}</p>
      </article>
      <ArticleContainer className='text-image-section__image' imageSrc={artileImg}  />
    </section>
  );
}

TextImageSection.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string
}

export default TextImageSection;