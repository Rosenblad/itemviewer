import classnames from 'classnames';
import * as React from 'react';
import LazyLoad from 'react-lazyload';
import { IItemProps } from '../../types/index';
import Actions from './Actions';
import './Item.css';

function Item(props: IItemProps) {
	const {
		component: componentProp,
		discount,
		discountedPrice,
		hidden,
		id,
		image,
		layout,
		onHide,
		other,
		price,
		subtitle,
		title,
		url,
	} = props;

	if (hidden) { return null; }

	let Component = componentProp;

	let componentPropProps = {};

	if (componentProp === 'a' && url) {
		componentPropProps = Object.assign({}, {
			href: url,
			target: '_blank',
		});
	} else if (componentProp === 'a' && !url) {
		Component = 'div';
	}

	const actions = [
		{
			label: 'Delete',
			onClick: () => onHide ? onHide(id) : null,
		},
	];

	return (
		<div className={classnames('Item', 'root', { [`Item-layout-${layout}`]: layout })}>
			<Component className="Item-actionArea" {...componentPropProps}>
				{ image &&
					<div className="image">
						<LazyLoad
							height={180}
							offset={200}
							once
							placeholder={<div style={{ background: '#f4f4f4', height: 180 }} />}>
							<img src={image} alt="" />
						</LazyLoad>
					</div> }
				<div className="Item-content content">
					<div className="title">
						{title}
					</div>
					<div className="subtitle">
						{subtitle}
					</div>
					<div className="other">
						{other}
					</div>
					{(price || discount) &&
						<div className="price-and-discount">
							<div className="discount">
								{discount}
							</div>
							<div className="price">
								{price}
							</div>
							<div className="discounted-price">
								{discountedPrice}
							</div>
						</div>}
				</div>
			</Component>
			<Actions actions={actions} />
		</div>
	);
}

Item.defaultProps = {
	component: 'a',
	hidden: false,
	layout: 'grid',
	other: [],
	url: null,
};

export default Item;
