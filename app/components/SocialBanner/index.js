/**
*
* SocialBanner
*
*/

import React from 'react';
import styled from 'styled-components';
import A from 'components/A';
import SocialBannerWrapper from './SocialBannerWrapper';
import SocialIcon from './SocialIcon';
import { ICONS } from './icons';

function SocialBanner() {
  return (
    <SocialBannerWrapper>
      <A href="www.facebook.com/cuistotducoin">
        <SocialIcon icon={ICONS.FACEBOOK.SVG} viewBox={ICONS.FACEBOOK.VIEWBOX} />
      </A>
      <A href="www.twitter.com/cuistotducoin">
        <SocialIcon icon={ICONS.TWITTER.SVG} viewBox={ICONS.TWITTER.VIEWBOX} />
      </A>
      <A href="www.instagram.com/cuistotducoin">
        <SocialIcon icon={ICONS.INSTAGRAM.SVG} viewBox={ICONS.INSTAGRAM.VIEWBOX} />
      </A>
      <A href="www.instagram.com/cuistotducoin">
        <SocialIcon icon={ICONS.PINTEREST.SVG} viewBox={ICONS.PINTEREST.VIEWBOX} />
      </A>
      <A href="www.instagram.com/cuistotducoin">
        <SocialIcon icon={ICONS.GOOGLE.SVG} viewBox={ICONS.GOOGLE.VIEWBOX} />
      </A>
      <A href="www.instagram.com/cuistotducoin">
        <SocialIcon icon={ICONS.YOUTUBE.SVG} viewBox={ICONS.YOUTUBE.VIEWBOX} />
      </A>
    </SocialBannerWrapper>
  );
}

export default SocialBanner;
