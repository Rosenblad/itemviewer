import { CollectionViewerState } from './collectionviewer/types';
import { ItemViewerState } from './itemviewer/types';
import { EntitiesState, ItemEntity } from './entities/types';

export interface AppState {
  collections: CollectionViewerState;
  itemViewer: ItemViewerState;
  entities: EntitiesState;
}

export const LOAD_DATA_SUCCESS = 'LOAD_DATA_SUCCESS';
export interface LoadDataSuccessAction {
  type: typeof LOAD_DATA_SUCCESS;
  collections: {
    id: string;
    name: string;
  }[];
  items: ItemEntity[];
  collectionItems: {
    id: string;
    collectionId: string;
    itemIds: string[];
  }[];
}
