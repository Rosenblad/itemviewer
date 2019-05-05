import React from 'react';
import { forceCheck } from 'react-lazyload';
// @ts-ignore (remove when @types/react-redux gets updated)
import { useDispatch, useSelector } from 'react-redux';
import { hideItem, deleteItem } from '../state/itemviewer/actions';
import ItemViewer from '../packages/itemviewer/src/components';
import { getHidden } from '../state/itemviewer/selectors';
import { ItemProps } from '../packages/itemviewer/src/types';
import { AppState } from '../state/types';

interface IProps {
  items: ItemProps[];
  deleteItem?(id: string): void;
  hideItem?(id: string): void;
}

function ItemViewerContainer({ items = [] }: IProps): JSX.Element {
  const hidden = useSelector((state: AppState): [] => getHidden(state));
  const dispatchHideItem = useDispatch(hideItem);
  const dispatchDeleteItem = useDispatch(deleteItem);

  const handleHide = (id: string): void => {
    dispatchHideItem(id);
    forceCheck();
  };

  const handleDelete = (id: string): void => {
    dispatchDeleteItem(id);
    forceCheck();
  };

  return (
    <ItemViewer
      items={items}
      onDelete={handleDelete}
      onHide={handleHide}
      hidden={hidden}
    />
  );
}

export default ItemViewerContainer;
