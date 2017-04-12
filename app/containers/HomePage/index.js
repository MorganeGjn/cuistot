/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Hero from 'components/Hero';
import ThreeSteps from 'components/ThreeSteps';
import SocialBanner from 'components/SocialBanner';
import DiscoverWorkShop from 'containers/DiscoverWorkShop';
import Footer from 'components/Footer';

export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div>
        <Hero />
        <ThreeSteps />
        <SocialBanner />
        <DiscoverWorkShop />
        <Footer />
      </div>
    );
  }
}
