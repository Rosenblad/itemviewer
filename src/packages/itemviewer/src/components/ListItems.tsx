import React from 'react';
import Item, { ItemProps } from './Item';

export interface ListItemsProps {
  items: ItemProps[];
  onHide?(id: string): void;
  onDelete?(id: string): void;
}

export default function ListItems({
  items = [],
  onDelete,
  onHide,
}: ListItemsProps): JSX.Element {
  return (
    <div className="ListItems">
      {items.map((item: { id: string }): JSX.Element | null =>
        item ? (
          <Item key={item.id} {...item} onHide={onHide} onDelete={onDelete} />
        ) : null,
      )}
    </div>
  );
}
