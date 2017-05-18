import React from 'react';

import Hero from 'components/genericComponents/Hero';
import ThreeSteps from 'components/specificComponents/ThreeSteps';
import SocialBanner from 'components/specificComponents/SocialBanner';
import WorkshopsList from 'containers/specificContainers/WorkshopsList';
import Footer from 'components/genericComponents/Footer';

// eslint-disable-next-line react/prefer-stateless-function
export class Home extends React.Component {
  render() {
    return (
      <div>
        <Hero
          videoURL="http://www.cuistotducoin.com/video.mp4"
          imageURL="http://www.cuistotducoin.com/img/noirmout.jpg"
        />
        <ThreeSteps />
        <SocialBanner />
        <WorkshopsList />
        <Footer />
      </div>
    );
  }
}

export default Home;
