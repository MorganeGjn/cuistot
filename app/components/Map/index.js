/*
 *
 * Map
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import GoogleMap from 'google-map-react';
import Marker from './marker';

import { List } from 'immutable';

export class Map extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    onChange: PropTypes.func,
    center: PropTypes.any,
    zoom: PropTypes.number,
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
        onChange={this._onChange}
      >
        <Marker lat={48.4} lng={-4.48} />
      </GoogleMap>
    );
  }
}

Map.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Map);
