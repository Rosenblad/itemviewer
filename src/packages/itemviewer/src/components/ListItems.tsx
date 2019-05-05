import React from 'react';
import { ItemProps } from '../types';
import Item from './Item';

interface IProps {
  items: ItemProps[];
  hidden: string[];
  onHide?(id: string): void;
  onDelete?(id: string): void;
}

function ListItems(props: IProps): JSX.Element {
  const { items, onDelete, onHide, hidden } = props;

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

ListItems.defaultProps = {
  hidden: [],
  items: [],
};

export default ListItems;
