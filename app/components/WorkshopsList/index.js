/**
*
* WorkshopList
*
*/

import React, { PropTypes } from 'react';

import List from 'components/List';
import LoadingIndicator from 'components/LoadingIndicator';
import WorkshopListItem from 'components/WorkshopListItem';

function WorkshopsList({ loading, workshops }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (workshops !== false) {
    return <List items={workshops} component={WorkshopListItem} />;
  }
}

WorkshopsList.propTypes = {
  loading: PropTypes.bool,
  workshops: PropTypes.any,
};

export default WorkshopsList;
