import { createSelector } from 'reselect';

/**
 * Direct selector to the discoverWorkShop state domain
 */
const selectDiscoverWorkShopDomain = () => (state) => state.get('discoverWorkShop');

/**
 * Other specific selectors
 */


/**
 * Default selector used by DiscoverWorkShop
 */

const makeSelectDiscoverWorkShop = () => createSelector(
  selectDiscoverWorkShopDomain(),
  (substate) => substate.toJS()
);

export default makeSelectDiscoverWorkShop;
export {
  selectDiscoverWorkShopDomain,
};
