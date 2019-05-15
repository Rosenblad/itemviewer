import React from 'react';
import { ItemProps } from './Item';
import ListItems from './ListItems';
import './Viewer.css';
import { Hidden } from '../../../../state/itemviewer/types';

export interface ItemViewerProps {
  items: ItemProps[];
  hidden: Hidden;
  toolbar?: JSX.Element | null;
  onDelete(id: string): void;
  onHide(id: string): void;
}

export default function ItemViewer({
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
