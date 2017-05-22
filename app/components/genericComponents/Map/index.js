/*
 *
 * Map
 *
 */

import React, { PropTypes } from 'react';
import GoogleMap from 'google-map-react';
import { List } from 'immutable';

// eslint-disable-next-line react/prefer-stateless-function
export class Map extends React.PureComponent {
  static propTypes = {
    center: PropTypes.any,
    zoom: PropTypes.number,
    markers: PropTypes.any.isRequired,
  };

  static defaultProps = {
    center: new List([48.4, -4.48]),
    zoom: 12,
  };

  render() {
    return (
      <GoogleMap
        // apiKey={null}
        center={this.props.center.toJS()}
        zoom={this.props.zoom}
      >
        {this.props.markers}
      </GoogleMap>
    );
  }
}

export default Map;
