import reducer from './items';
import { HIDE_ITEM } from '../actions/item';

const initialState = [
	{
		id: 0,
		hidden: false,
	},
];

describe('items reducer', () => {
	it('should return the initial state', () => {
		expect(reducer(initialState, {})).toEqual(initialState);
	});

	it('should handle HIDE_ITEM', () => {
		expect(reducer(initialState, {
			type: HIDE_ITEM,
			id: 0,
		})).toEqual([
			{
				id: 0,
				hidden: true,
			},
		]);
	});
});
