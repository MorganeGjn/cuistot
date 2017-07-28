/**
*
* Hero
*
*/

import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

import Header from "components/genericComponents/Header";
import BackgroundVideo from "components/genericComponents/BackgroundVideo";

import GeoSuggest from "components/specificComponents/GeoSuggest";

import messages from "./messages";
import Heading from "./Heading";
import HeroWrapper from "./HeroWrapper";
import ContainerHero from "./ContainerHero";
import AbsoluteHero from "./AbsoluteHero";

function Hero(props) {
  return (
    <HeroWrapper>
      <BackgroundVideo videoURL={props.videoURL} imageURL={props.imageURL} />
      <Header
        loginRequest={props.loginRequest}
        logined={props.logined}
        logoutRequest={props.logoutRequest}
        loginFacebook={props.loginFacebook}
      />
      <AbsoluteHero>
        <ContainerHero>
          <Heading>
            <FormattedMessage {...messages.title} />
          </Heading>
          <Heading level={2} big>
            <FormattedMessage {...messages.subtitle} />
          </Heading>
          <GeoSuggest />
        </ContainerHero>
      </AbsoluteHero>
    </HeroWrapper>
  );
}

Hero.propTypes = {
  videoURL: PropTypes.string.isRequired,
  imageURL: PropTypes.string,
  dispatch: PropTypes.func
};

Hero.defaultProps = {
  imageURL: ""
};

export default Hero;
