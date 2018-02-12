import * as itemActions from './itemActions';

describe('item actions', () => {
	it('should create an action hide an item', () => {
		const id = 'hello';
		const expectedAction = {
			type: itemActions.HIDE_ITEM,
			id,
		};

		expect(itemActions.hideItem(id)).toEqual(expectedAction);
	});
});

