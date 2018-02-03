import { combineReducers } from 'redux';
import collectionsReducer from './collections';
import itemsReducer from './items';

export default combineReducers({
	collections: collectionsReducer,
	items: itemsReducer,
});
