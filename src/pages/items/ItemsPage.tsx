import React from 'react';
import { useDispatch } from 'react-redux';
import { hideItem, deleteItem } from '../../state/itemviewer/actions';
import ItemViewer from '../../packages/itemviewer/src/components';
import { ItemProps } from '../../packages/itemviewer';

export interface ItemViewerContainerProps {
  items: ItemProps[];
  deleteItem?(id: string): void;
  hideItem?(id: string): void;
  [propName: string]: any;
}

export default function ItemsPage({
  items = [],
  ...other
}: ItemViewerContainerProps): JSX.Element {
  const dispatch = useDispatch();

  const handleHide = (id: string): void => {
    dispatch(hideItem(id));
  };

  const handleDelete = (id: string): void => {
    dispatch(deleteItem(id));
  };

  return (
    <ItemViewer
      items={items}
      onDelete={handleDelete}
      onHide={handleHide}
      {...other}
    />
  );
}
