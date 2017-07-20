import React from 'react';

import Hero from 'components/genericComponents/Hero';
import Heading from 'components/genericComponents/Heading';
import Footer from 'components/genericComponents/Footer';
import Container from 'components/genericComponents/Container';
import FlexWrapper from 'components/genericComponents/Container/FlexWrapper';

import ThreeSteps from 'components/specificComponents/ThreeSteps';
import WorkshopsList from 'containers/specificContainers/WorkshopsList';
import SocialBanner from 'components/specificComponents/SocialBanner';
import GiftCardPresentation
  from 'components/specificComponents/GiftCardPresentation';
import InviteFriendPresentation
  from 'components/specificComponents/InviteFriendPresentation';

// eslint-disable-next-line react/prefer-stateless-function
export class Home extends React.Component {
  render() {
    return (
      <div>
        <Hero
          videoURL="http://www.cuistotducoin.com/video.mp4"
          imageURL="http://www.cuistotducoin.com/img/noirmout.jpg"
          loginRequest={this.props.loginRequest} successful={this.props.successful}
          logoutRequest={this.props.logoutRequest}/>
        <ThreeSteps />
        <Container>
          <Heading level={2}>Découvez nos ateliers</Heading>
          <WorkshopsList />
          <FlexWrapper>
            <GiftCardPresentation /><InviteFriendPresentation />
          </FlexWrapper>
          <SocialBanner />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Home;
