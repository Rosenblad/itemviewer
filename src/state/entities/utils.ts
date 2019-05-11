import { LOAD_DATA_SUCCESS } from '../types';
import { normalize } from '../reducerUtils';

export function createEntity(key: any): any {
  return {
    reducer: (state = {}, action: any): any => {
      switch (action.type) {
        case LOAD_DATA_SUCCESS:
          return normalize(action[key]);
        default:
          return state;
      }
    },
    selector: (state: any): any => state[key],
  };
}
