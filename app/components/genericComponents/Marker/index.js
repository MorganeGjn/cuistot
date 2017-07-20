import React, { PropTypes } from 'react';
import styled from 'styled-components';

import Wrapper from './Wrapper';

class Marker extends React.Component {
  static propTypes = {
    index: PropTypes.string,
    lat: PropTypes.number,
    lng: PropTypes.number,
    workshopIndex: PropTypes.string,
    updateWorkshopIndex: PropTypes.func,
  };

  handleHoverOn = () => this.props.updateWorkshopIndex(this.props.index);

  handleHoverOff = () => this.props.updateWorkshopIndex(-1);

  render() {
    const Hovering = styled(Marker)`
      transform: scale(1, 1);
      filter: contrast(1);
      transition: all 300ms ease;
    `;

    const Hoverout = styled(Marker)`
      transform: scale(0.45, 0.45);
      filter: contrast(0.815385);
      transition: all 300ms ease;
    `;

    let WrapperToRender;
    if (this.props.workshopIndex === this.props.index) {
      WrapperToRender = (
        <Hovering
          onMouseEnter={this.handleHoverOn}
          onMouseLeave={this.handleHoverOff}
        />
      );
    } else {
      /* else if (this.props.index !== this.props.getWorkshopIndex) {
      WrapperToRender = (
        <Hoverout
          onMouseEnter={this.handleHoverOn}
          onMouseLeave={this.handleHoverOff}
        />
      );
      }*/ WrapperToRender = (
        <Wrapper
          onMouseEnter={this.handleHoverOn}
          onMouseLeave={this.handleHoverOff}
        />
      );
    }

    return WrapperToRender;
  }
}

export default Marker;
