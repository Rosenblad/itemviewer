import React from 'react';
import Item, { ItemProps } from './Item';

export interface ListItemsProps {
  items: ItemProps[];
  hidden: string[];
  onHide?(id: string): void;
  onDelete?(id: string): void;
}

export default function ListItems({
  items = [],
  onDelete,
  onHide,
  hidden = [],
}: ListItemsProps): JSX.Element {
  return (
    <div className="ListItems">
      {items.map(
        (item: { id: string }): JSX.Element | null =>
          item && !hidden.includes(item.id) ? (
            <Item key={item.id} {...item} onHide={onHide} onDelete={onDelete} />
          ) : null,
      )}
    </div>
  );
}
