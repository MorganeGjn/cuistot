
import { fromJS } from 'immutable';
import discoverWorkShopReducer from '../reducer';

describe('discoverWorkShopReducer', () => {
  it('returns the initial state', () => {
    expect(discoverWorkShopReducer(undefined, {})).toEqual(fromJS({}));
  });
});
