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
    const item = this.props.item;
    const content = <WorkShopCard workshop={item} />;

    // Render the content into a list item
    return (
      <ListItem key={`workshop-list-item-${item.full_name}`} item={content} />
    );
  }
}

WorkshopListItem.propTypes = {
  item: React.PropTypes.object,
};

export default WorkshopListItem;
