/**
*
* Hero
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Header from 'components/Header';
import BackgroundVideo from 'components/BackgroundVideo';
import HeroWrapper from './HeroWrapper';
import ContainerHero from './ContainerHero';
import AbsoluteHero from './AbsoluteHero';
import H1Header from './H1Header';
import H2Header from './H2Header';
import Geosuggest from 'react-geosuggest';

function Hero() {
  return (
    <HeroWrapper>
      <BackgroundVideo />
      <Header />
      <AbsoluteHero>
        <ContainerHero>
          <H1Header><FormattedMessage {...messages.title} /></H1Header>
          <H2Header><FormattedMessage {...messages.subtitle} /></H2Header>
          <Geosuggest />
        </ContainerHero>
      </AbsoluteHero>
    </HeroWrapper>
  );
}

Hero.propTypes = {};

export default Hero;
