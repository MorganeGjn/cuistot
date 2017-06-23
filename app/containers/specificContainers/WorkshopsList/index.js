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
    return <WorkshopListComp workshops={props.workshops} />;
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
  query DiscoverWorkshopQuery {
    workshop {
      workshop_id
      name
      price
      duration
      min_gourmet
      max_gourmet
      description
      pictures
      kitchen_id
      cook_id
      workshop_date
      reservation {
        amount
      }
      cook {
        cook_id
        is_pro
        description
        gourmet {
          location
          city
        }
      }
      kitchen {
        kitchen_id
        name
        location
        city
      }
    }
  }
`;

const withData = graphql(DISCOVER_WORKSHOP_QUERY, {
  props: ({ data: { loading, workshop } }) => ({
    loading,
    workshops: workshop,
  }),
});

export default withData(WorkshopsList);
