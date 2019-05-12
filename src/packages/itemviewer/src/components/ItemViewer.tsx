import React from 'react';
import { ItemProps } from '../types';
import ListItems from './ListItems';
import './Viewer.css';
import { Hidden } from '../../../../state/itemviewer/types';

interface ItemViewerProps {
  items: ItemProps[];
  hidden: Hidden;
  toolbar?: JSX.Element | null;
  onDelete(id: string): void;
  onHide(id: string): void;
}

function ItemViewer({
  items,
  onDelete,
  onHide,
  toolbar = null,
  hidden,
}: ItemViewerProps): JSX.Element {
  return (
    <div className="Viewer">
      {toolbar}
      <ListItems
        items={items}
        onDelete={onDelete}
        onHide={onHide}
        hidden={hidden}
      />
    </div>
  );
}

export default ItemViewer;
