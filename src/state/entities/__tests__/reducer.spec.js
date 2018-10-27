import { LOAD_DATA_SUCCESS } from '../../actions';
import entity from '../items';

describe('items entity', () => {
	const { reducer } = entity;

	it('should handle loaded date', () => {
		const state = reducer(undefined, {
			type: LOAD_DATA_SUCCESS,
			items: [
				{
					id: '1',
					title: 'Item 001',
				}
			],
		});

		const expectedState = {
			"allIds": ["1"], 
			"byId": {
				"1": {
					"id": "1", "title": "Item 001"
				}
			}
		}

		expect(state).toEqual(expectedState);
	})
});