import React from 'react';
import { ItemProps } from './Item';
import ListItems from './ListItems';
import './Viewer.css';

export interface ItemViewerProps {
  items: ItemProps[];
  toolbar?: JSX.Element | null;
  onDelete?(id: string): void;
  onHide?(id: string): void;
}

export default function ItemViewer({
  items,
  onDelete,
  onHide,
  toolbar = null,
}: ItemViewerProps): JSX.Element {
  return (
    <div className="Viewer">
      {toolbar}
      <ListItems items={items} onDelete={onDelete} onHide={onHide} />
    </div>
  );
}
