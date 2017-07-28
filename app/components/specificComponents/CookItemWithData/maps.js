import React from 'react';
import { withGoogleMap, GoogleMap, Circle } from 'react-google-maps';

const SimpleMapExampleGoogleMap = withGoogleMap(props =>
  <GoogleMap
    defaultOptions={{
      scrollwheel: false
    }}
    defaultZoom={12}
    defaultCenter={props.center}
  >
    {props.center &&
      <Circle
        center={props.center}
        radius={props.radius}
        options={{
          fillColor: `red`,
          fillOpacity: 0.2,
          strokeColor: `red`,
          strokeOpacity: 1,
          strokeWeight: 1
        }}
      />}
  </GoogleMap>
);

export default class SimpleMapExample extends React.Component {
  render() {
    const radius = this.props.radius;
    const center = { lat: this.props.lat, lng: this.props.lon };

    return (
      // Attention : styles capricieux
      <SimpleMapExampleGoogleMap
        containerElement={
          <div
            style={{
              display: `block`,
              margin: `auto`,
              width: `75%`,
              height: `100%`,
              border: `1px solid #BF263C`
            }}
          />
        }
        mapElement={<div style={{ height: `500px` }} />}
        center={center}
        radius={radius}
      />
    );
  }
}
