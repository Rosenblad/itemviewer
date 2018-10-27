import { LOAD_DATA_SUCCESS } from './actions';
import { normalize } from './reducerUtils';

export function createEntity(key) {
	return {
		reducer: (state = {}, action) => {
			switch (action.type) {
				case LOAD_DATA_SUCCESS: return normalize(action[key]);
				default: return state;
			}
		},
		selector: state => state[key],
	};
};

export function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
};