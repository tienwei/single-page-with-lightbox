import React from 'react';
import PropTypes from 'prop-types';
import './FullTextSection.scss';

const FullTextSection = ({ title, content }) => {
  return (
    <section className='full-text-section'>
      <article className='article-container article-container--top-border'>
        <h2 className='article-container__title article-container__title--large'>{title}</h2>
        <p className='article-container__content'>{content}</p>
      </article>
    </section>
  );
}

FullTextSection.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string
}

export default FullTextSection;