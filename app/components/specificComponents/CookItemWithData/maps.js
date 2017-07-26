import React from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

const SimpleMapExampleGoogleMap = withGoogleMap(props =>
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }} />
);

export default class SimpleMapExample extends React.Component {
  render() {
    return (
      <SimpleMapExampleGoogleMap
        containerElement={
          <div
            style={{
              display: `block`,
              margin: `auto`,
              width: `50%`,
              height: `100%`
            }}
          />
        }
        mapElement={<div style={{ height: `300px` }} />}
      />
    );
  }
}
