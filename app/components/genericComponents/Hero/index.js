/**
*
* Hero
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Geosuggest from 'react-geosuggest';

import Header from 'components/genericComponents/Header';
import BackgroundVideo from 'components/genericComponents/BackgroundVideo';
import Heading from 'components/genericComponents/Heading';

import messages from './messages';
import HeroWrapper from './HeroWrapper';
import ContainerHero from './ContainerHero';
import AbsoluteHero from './AbsoluteHero';

function Hero(props) {
  return (
    <HeroWrapper>
      <BackgroundVideo videoURL={props.videoURL} imageURL={props.imageURL} />
      <Header />
      <AbsoluteHero>
        <ContainerHero>
          <Heading><FormattedMessage {...messages.title} /></Heading>
          <Heading level={2} big>
            <FormattedMessage {...messages.subtitle} />
          </Heading>
          <Geosuggest />
        </ContainerHero>
      </AbsoluteHero>
    </HeroWrapper>
  );
}

Hero.propTypes = {
  videoURL: PropTypes.string.isRequired,
  imageURL: PropTypes.string,
};

Hero.defaultProps = {
  imageURL: '',
};

export default Hero;
