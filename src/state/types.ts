import { CollectionViewerState } from './collectionviewer/types';
import { ItemViewerState, Item } from './itemviewer/types';
import { EntitiesState } from './entities/types';

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
  items: Item[];
  collectionItems: {
    id: string;
    collectionId: string;
    itemIds: string[];
  }[];
}
