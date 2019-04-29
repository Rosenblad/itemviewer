import * as React from 'react';
import { IItemProps } from '../types/index';
import ListItems from './ListItems';
import './Viewer.css';

interface IProps {
  items: IItemProps[];
  hidden?: [];
  toolbar?: any;
  onDelete(id: string): void;
  onHide(id: string): void;
}

function ItemViewer(props: IProps) {
  const { items, onDelete, onHide, toolbar, hidden } = props;

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

ItemViewer.defaultProps = {
  toolbar: null,
};

export default ItemViewer;
