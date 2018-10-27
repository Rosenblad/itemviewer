import { combineReducers } from 'redux';

import itemViewerReducer from 'containers/ItemViewerContainer/reducer';
import collectionsReducer from 'containers/CollectionViewerContainer/reducer';
import entitiesReducer from 'state/entities/reducer';

export default combineReducers({
	collections: collectionsReducer,
	itemViewer: itemViewerReducer,
	entities: entitiesReducer,
});

// State overview
// const state = {
// 	entities: {
// 		collections: {
// 			byId: {},
// 			allIds: [],
// 		},
// 		items: {
// 			byId: {},
// 			allIds: [],
// 		},
// 		collectionItems: {
// 			byId: {},
// 			allIds: [],
// 		}
// 	},
// 	itemViewer: {
// 		selectedItems: [],
// 		searchQuery: '',
// 		enlargedImageOpen: false,
// 		layout: '',
// 		columns: 0,
// 		compare: {},
// 		sortBy: '',
// 	},
// 	collectionViewer: {
// 		createCollection: {
// 			value: '',
// 		}
// 	},
// 	crawlingTool: {},
// };
