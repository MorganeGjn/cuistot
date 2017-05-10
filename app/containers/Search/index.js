/*
 *
 * Search
 *
 */

import React from 'react';
import { graphql, gql } from 'react-apollo';

import Map from 'components/Map';
import Marker from 'components/Marker';
import WorkshopsList from 'components/WorkshopsList';
import LoadingIndicator from 'components/LoadingIndicator';

import Sidebar from './Sidebar';
import MapCanvas from './MapCanvas';

export class Search extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const { loading, error } = this.props;

    if (loading) {
      return <LoadingIndicator />;
    }

    const workshops = this.props.workshops.nodes;
    const markers = [];

    const workshopsListProps = {
      loading,
      error,
      workshops,
    };

    if (workshops) {
      workshops.forEach((workshop) => {
        if (workshop.kitchenByKitchenId) {
          markers.push(
            <Marker
              key={`item-${workshop.nodeId}`}
              lat={workshop.kitchenByKitchenId.location.lat}
              lng={workshop.kitchenByKitchenId.location.lng}
            />
          );
        } else {
          markers.push(
            <Marker
              key={`item-${workshop.nodeId}`}
              lat={workshop.cookByCookId.location.lat}
              lng={workshop.cookByCookId.location.lng}
            />
          );
        }
      });
    }

    const mapProps = {
      loading,
      error,
      markers,
    };

    return (
      <div>
        <Sidebar>
          <form>
            <label htmlFor="username">
              <input id="username" type="text" placeholder="mxstbr" />
            </label>
          </form>
          <WorkshopsList {...workshopsListProps} />
        </Sidebar>
        <MapCanvas>
          <Map {...mapProps} />
        </MapCanvas>
      </div>
    );
  }
}

Search.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  workshops: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
};

const DISCOVER_WORKSHOP_QUERY = gql`
  query DisocverWorkshopQuery {
    allWorkshops(last: 2) {
      nodes {
        nodeId
        workshopId
        name
        price
        duration
        minGourmet
        maxGourmet
        description
        pictures
        kitchenId
        cookId
        workshopDate
        reservationsByWorkshopId{totalCount}
        cookByCookId {
          nodeId
          cookId
          isPro
          location
          description
        }
        kitchenByKitchenId {
          nodeId
          kitchenId
          name
          location
        }
      }
    }
  }
`;

const withData = graphql(DISCOVER_WORKSHOP_QUERY, {
  props: ({ data: { loading, allWorkshops } }) => ({
    loading,
    workshops: allWorkshops,
  }),
});

export default withData(Search);
