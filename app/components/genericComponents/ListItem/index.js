import React from 'react';

function ListItem(props) {
  return props.item;
}

ListItem.propTypes = {
  item: React.PropTypes.any,
};

export default ListItem;
