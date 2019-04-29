import * as React from 'react';
import { IItemProps } from '../types/index';
import Item from './Item';

interface IProps {
  items: IItemProps[];
  hidden: string[];
  onHide?(id: string): void;
  onDelete?(id: string): void;
}

function ListItems(props: IProps) {
  const { items, onDelete, onHide, hidden } = props;

  return (
    <div className="ListItems">
      {items.map(item =>
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
