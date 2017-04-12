/**
*
* BackgroundVideo
*
*/

import React from 'react';
import styled, { css } from 'styled-components';
import Background from './Background';
const videoURL = 'http://www.cuistotducoin.com/video.mp4';

const styles = css`
  opacity: 1;
  position: relative;
  width: 100%;
  display: none;
  @media (min-width: 950px) {
    display: block !important;
  }
`;

const Video = styled.video`${styles}`;

function BackgroundVideo() {
  return (
    <div>
      <Background />
      <Video autoPlay muted loop poster="img.jpg">
        <source src={videoURL} type="video/mp4" />
      </Video>
    </div>
  );
}

export default BackgroundVideo;
