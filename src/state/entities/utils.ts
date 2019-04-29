import { LOAD_DATA_SUCCESS } from '../actions';
import { normalize } from '../reducerUtils';

export function createEntity(key: any) {
  return {
    reducer: (state = {}, action: any) => {
      switch (action.type) {
        case LOAD_DATA_SUCCESS:
          return normalize(action[key]);
        default:
          return state;
      }
    },
    selector: (state: any) => state[key],
  };
}
