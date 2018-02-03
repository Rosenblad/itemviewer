import reducer from './collections';
import { CREATE_COLLECTION } from '../actions';

const initialState = [];

describe('collections reducer', () => {
	it('should return the initial state', () => {
		expect(reducer(initialState, {})).toEqual(initialState);
	});

	it('should handle CREATE_COLLECTION', () => {
		expect(
			reducer(initialState, {
				type: CREATE_COLLECTION,
				collection: {
					id: 'hello',
				}
			})
		).toEqual([
			{
				id: 'hello',
			}
		]);
	});
});