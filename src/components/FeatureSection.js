import React from 'react';
import './FeatureSection.scss';
import ArticleContainer from '../containers/Article';
import artileImg from '../assets/images/placeholder.png';

const FeatureSection = () => (
  <section className='feature-section'>
    <ArticleContainer
      modifier='article--feature'
      imageSrc={artileImg} 
      title='Feature Article One'
      content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec' />
    <ArticleContainer 
      modifier='article--feature'
      imageSrc={artileImg} 
      title='Feature Article Two'
      content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec' />
  </section>
);

export default FeatureSection;