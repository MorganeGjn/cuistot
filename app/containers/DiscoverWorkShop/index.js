/*
 *
 * DiscoverWorkShop
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectDiscoverWorkShop from './selectors';
import messages from './messages';
import WorkShopCard from 'components/WorkShopCard';
import DiscoverWorkShopWrapper from './DiscoverWorkShopWrapper';

export default class DiscoverWorkShop extends React.PureComponent {
  render() {
    return (
      <DiscoverWorkShopWrapper>
        <WorkShopCard />
        <WorkShopCard />
        <WorkShopCard />
      </DiscoverWorkShopWrapper>
    );
  }
}
/*
DiscoverWorkShop.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  DiscoverWorkShop: makeSelectDiscoverWorkShop(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverWorkShop);*/
