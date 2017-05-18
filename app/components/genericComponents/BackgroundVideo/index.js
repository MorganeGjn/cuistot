/**
*
* BackgroundVideo
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

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

function BackgroundVideo(props) {
  const Background = styled('div')`
    background-image: url(${props.imageURL});
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-position: 50%;
    background-size: cover;
    overflow: hidden;
  `;

  return (
    <div>
      <Background />
      <Video autoPlay muted loop poster={props.imageURL}>
        <source src={props.videoURL} type="video/mp4" />
      </Video>
    </div>
  );
}

BackgroundVideo.propTypes = {
  videoURL: PropTypes.string.isRequired,
  imageURL: PropTypes.string,
};

BackgroundVideo.defaultProps = {
  imageURL: '',
};

export default BackgroundVideo;
