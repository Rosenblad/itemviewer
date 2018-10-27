import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import Actions from './Actions';
import './Item.css';

const Item = (props) => {
	const {
		component: componentProp,
		url,
		hidden,
		onDelete,
		onHide,
	} = props;

	if (hidden) return null;

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
			onClick: () => onHide(props.id),
		}
	];

	return (
		<div className="root">
			<Component className="content" {...componentPropProps}>
				{ props.image &&
					<div className="image">
						<LazyLoad 
							height={180}
							offset={200}
							once
							placeholder={<div style={{ background: '#f4f4f4', height: 180 }} />}>
							<img src={props.image} alt="" />
						</LazyLoad>
					</div> }
				<div className="title">
					{props.title}
				</div>
				<div className="subtitle">
					{props.subtitle}
				</div>
				<div className="other">
					{props.other}
				</div>
				{(props.price || props.discount) &&
					<div className="price-and-discount">
						<div className="discount">
							{props.discount}
						</div>
						<div className="price">
							{props.price}
						</div>
						<div className="discounted-price">
							{props.discountedPrice}
						</div>
					</div>}
			</Component>
			<Actions 
				id={props.id} 
				onDelete={onDelete} 
				actions={actions} />
		</div>
	);
};

Item.propTypes = {
	id: PropTypes.string.isRequired,
	component: PropTypes.string,
	hidden: PropTypes.bool,
	image: PropTypes.string,
	title: PropTypes.string,
	subtitle: PropTypes.string,
	other: PropTypes.array,
	layout: PropTypes.oneOf(['grid', 'list']),
	url: PropTypes.string,
	price: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
	discount: PropTypes.string,
	discountedPrice: PropTypes.string,
	onHide: PropTypes.func,
	onDelete: PropTypes.func,
};

Item.defaultProps = {
	component: 'a',
	hidden: false,
	other: [],
	layout: 'grid',
	url: null,
};

export default Item;
