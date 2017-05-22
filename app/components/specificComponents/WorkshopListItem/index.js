/**
 * RepoListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import PropTypes from 'prop-types';

import ListItem from 'components/genericComponents/ListItem';
import WorkShopCard from 'components/specificComponents/WorkShopCard';

// eslint-disable-next-line react/prefer-stateless-function
export class WorkshopListItem extends React.PureComponent {
  render() {
    const workshop = this.props.item;
    const content = <WorkShopCard workshop={workshop} />;

    // Render the content into a list item
    return (
      <ListItem
        key={`workshop-list-item-${workshop.workshopId}`}
        item={content}
      />
    );
  }
}

WorkshopListItem.propTypes = {
  item: PropTypes.object,
};

WorkshopListItem.defaultProps = {
  item: {},
};

export default WorkshopListItem;
