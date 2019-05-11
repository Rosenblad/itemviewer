// @ts-nocheck
import reducer from './reducer';
import { HIDE_ITEM } from './types';

const initialState = [
  {
    id: 0,
    hidden: false,
  },
];

describe('items reducer', (): void => {
  it('should return the initial state', (): void => {
    // @ts-ignore
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  it('should handle HIDE_ITEM', (): void => {
    expect(
      reducer(initialState, {
        type: HIDE_ITEM,
        id: 0,
      }),
    ).toEqual([
      {
        id: 0,
        hidden: true,
      },
    ]);
  });
});
