import React from 'react';
import { forceCheck } from 'react-lazyload';
import { useDispatch, useSelector } from 'react-redux';
import { hideItem, deleteItem } from '../../state/itemviewer/actions';
import ItemViewer from '../../packages/itemviewer/src/components';
import { getHidden } from '../../state/itemviewer/selectors';
import { ItemProps } from '../../packages/itemviewer/src/types';
import { AppState } from '../../state/types';
import { Hidden } from '../../state/itemviewer/types';

export interface ItemViewerContainerProps {
  items: ItemProps[];
  deleteItem?(id: string): void;
  hideItem?(id: string): void;
  [propName: string]: any;
}

function ItemsPage({
  items = [],
  ...other
}: ItemViewerContainerProps): JSX.Element {
  const hidden = useSelector((state: AppState): Hidden => getHidden(state));
  const dispatch = useDispatch();

  const handleHide = (id: string): void => {
    dispatch(hideItem(id));
    forceCheck();
  };

  const handleDelete = (id: string): void => {
    dispatch(deleteItem(id));
    forceCheck();
  };

  return (
    <ItemViewer
      items={items}
      onDelete={handleDelete}
      onHide={handleHide}
      hidden={hidden}
      {...other}
    />
  );
}

export default ItemsPage;
