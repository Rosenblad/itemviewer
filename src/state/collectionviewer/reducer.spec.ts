// @ts-nocheck
import reducer from './reducer';
// @ts-ignore
import { CREATE_COLLECTION } from './actions';

// @ts-ignore
const initialState = [];

describe('collections reducer', (): void => {
  it('should return the initial state', (): void => {
    // @ts-ignore
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  // @ts-ignore
  it('should handle CREATE_COLLECTION', (): void => {
    // @ts-ignore
    expect(
      // @ts-ignore
      reducer(initialState, {
        type: CREATE_COLLECTION,
        collection: {
          id: 'hello',
        },
      }),
    ).toEqual([
      {
        id: 'hello',
      },
    ]);
  });
});
