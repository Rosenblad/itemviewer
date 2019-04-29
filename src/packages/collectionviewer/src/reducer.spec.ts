import reducer from './reducer';
// @ts-ignore
import { CREATE_COLLECTION } from './actions';

// @ts-ignore
const initialState = [];

describe('collections reducer', () => {
  it('should return the initial state', () => {
    // @ts-ignore
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  // @ts-ignore
  it('should handle CREATE_COLLECTION', () => {
    // @ts-ignore
    expect(
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
