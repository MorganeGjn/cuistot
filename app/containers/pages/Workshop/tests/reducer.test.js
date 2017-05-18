
import { fromJS } from 'immutable';
import workshopReducer from '../reducer';

describe('workshopReducer', () => {
  it('returns the initial state', () => {
    expect(workshopReducer(undefined, {})).toEqual(fromJS({}));
  });
});
