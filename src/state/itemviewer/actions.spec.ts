import { HIDE_ITEM } from './types';
import { hideItem } from './actions';

describe('item actions', (): void => {
  it('should create an action hide an item', (): void => {
    const id = 'hello';
    const expectedAction = {
      type: HIDE_ITEM,
      id,
    };

    expect(hideItem(id)).toEqual(expectedAction);
  });
});
