/**
*
* WorkshopList
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/genericComponents/List';
import WorkshopListItem from 'components/specificComponents/WorkshopListItem';

function WorkshopsList({ workshops }) {
  return <List items={workshops} component={WorkshopListItem} />;
}

WorkshopsList.propTypes = {
  workshops: PropTypes.any,
};

WorkshopsList.defaultProps = {
  workshops: [],
};

export default WorkshopsList;
