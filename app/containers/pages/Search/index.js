/*
 *
 * Search
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { graphql, gql } from 'react-apollo';

import Map from 'components/genericComponents/Map';
import Marker from 'components/genericComponents/Marker';
import LoadingIndicator from 'components/genericComponents/LoadingIndicator';

import WorkshopsList from 'components/specificComponents/WorkshopsList';
import SearchWorkShopForm
  from 'components/specificComponents/SearchWorkShopForm';

import Sidebar from './Sidebar';
import MapCanvas from './MapCanvas';

// eslint-disable-next-line react/prefer-stateless-function
export class Search extends React.Component {
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
          <SearchWorkShopForm onSubmit={this.login} />
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
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  workshops: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
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
          description
          gourmetByCookId {
            location
            city
          }
        }
        kitchenByKitchenId {
          nodeId
          kitchenId
          name
          location,
          city
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
