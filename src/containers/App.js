import React, { Component } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeatureSection from '../components/FeatureSection';
import FullTextSection from '../components/FullTextSection';
import TextImageSection from '../components/TextImageSection';
import QuickLinkSection from '../components/QuickLinkSection';
import ModalContainer from './Modal';
import Footer from '../components/Footer';
import image1 from '../assets/images/placeholder1.png';
import image2 from '../assets/images/placeholder2.png';
import image3 from '../assets/images/placeholder3.png';

class App extends Component {
  render() {
    const imageSet = [
      { id: 1, img: image1, content: 'Image One' },
      { id: 2, img: image2, content: 'Image Two' },
      { id: 3, img: image3, content: 'Image Three' }
    ];

    return (
      <div>
        <Header />
        <Hero />
        <FeatureSection />
        <FullTextSection 
          title='First Paragraph' 
          content={`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque 
            penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel, 
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet 
            a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. 
            Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean 
            vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat 
            vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, 
            feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. 
            Quisque rutrum. Aenean imperdiet.`} />
        <TextImageSection 
          title='Second Paragraph' 
          content={`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque 
            penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel, 
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet 
            a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. 
            Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean 
            vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat 
            vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, 
            feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. 
            Quisque rutrum. Aenean imperdiet.`} />
        <QuickLinkSection imageSet={imageSet} />
        <Footer />
        <ModalContainer />
      </div>
    );
  }
}

export default App;
