/**
 * RepoListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';

import ListItem from 'components/ListItem';
import WorkShopCard from 'components/WorkShopCard';

export class WorkshopListItem extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
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
  item: React.PropTypes.object,
};

WorkshopListItem.defaultProps = {
  item: {},
};

export default WorkshopListItem;
