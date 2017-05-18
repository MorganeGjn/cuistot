/**
*
* WorkshopList
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { graphql, gql } from 'react-apollo';

import List from 'components/genericComponents/List';
import WorkshopListComp from 'components/specificComponents/WorkshopsList';
import LoadingIndicator from 'components/genericComponents/LoadingIndicator';

function WorkshopsList(props) {
  if (!props.loading && props.workshops !== false) {
    return <WorkshopListComp workshops={props.workshops.nodes} />;
  }

  return <List component={LoadingIndicator} />;
}

WorkshopsList.propTypes = {
  loading: PropTypes.bool,
  workshops: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

WorkshopsList.defaultProps = {
  loading: true,
  workshops: false,
};

const DISCOVER_WORKSHOP_QUERY = gql`
  query DisocverWorkshopQuery {
    allWorkshops(last: 3) {
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

export default withData(WorkshopsList);
