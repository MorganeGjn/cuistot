import { createSelector } from 'reselect';

/**
 * Direct selector to the workshop state domain
 */
const selectWorkshopDomain = () => (state) => state.get('workshop');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Workshop
 */

const makeSelectWorkshop = () => createSelector(
  selectWorkshopDomain(),
  (substate) => substate.toJS()
);

export default makeSelectWorkshop;
export {
  selectWorkshopDomain,
};
