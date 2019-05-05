import React from 'react';
import classnames from 'classnames';
import LazyLoad from 'react-lazyload';
import { ItemProps } from '../../types';
import Actions from './Actions';
import './Item.css';

function Item({
  component = 'a',
  discount,
  discountedPrice,
  hidden = false,
  id,
  image,
  layout = 'grid',
  onHide,
  other = [],
  price,
  subtitle,
  title,
  url = null,
}: ItemProps): JSX.Element | null {
  if (hidden) {
    return null;
  }

  let Component = component;

  let componentProps = {};

  if (component === 'a' && url) {
    componentProps = Object.assign(
      {},
      {
        href: url,
        target: '_blank',
      },
    );
  } else if (component === 'a' && !url) {
    Component = 'div';
  }

  const actions = [
    {
      label: 'Delete',
      onClick: (): void | null => (onHide ? onHide(id) : null),
    },
  ];

  return (
    <div
      className={classnames('Item', 'root', {
        [`Item-layout-${layout}`]: layout,
      })}
    >
      <Component className="Item-actionArea" {...componentProps}>
        {image && (
          <div className="image">
            <LazyLoad
              height={180}
              offset={200}
              once
              placeholder={
                <div style={{ background: '#f4f4f4', height: 180 }} />
              }
            >
              <img src={image} alt="" />
            </LazyLoad>
          </div>
        )}
        <div className="Item-content content">
          <div className="title">{title}</div>
          <div className="subtitle">{subtitle}</div>
          <div className="other">{other}</div>
          {(price || discount) && (
            <div className="price-and-discount">
              <div className="discount">{discount}</div>
              <div className="price">{price}</div>
              <div className="discounted-price">{discountedPrice}</div>
            </div>
          )}
        </div>
      </Component>
      <Actions actions={actions} />
    </div>
  );
}

export default Item;
