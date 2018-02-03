import React from 'react';
import PropTypes from 'prop-types';
import './Item.css';
import Close from './Item/Close';

const Item = props => {

	const {
		component: componentProp,
		url,
		hidden,
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

	const handleCloseClick = e => {
		if (props.onCloseClick) {
			props.onCloseClick(e, props.id);
		}
	}

	return (
		<div className="root">
			<div className="close" onClick={handleCloseClick}>
				<Close />
			</div>
			<Component className="content" {...componentPropProps}>
				{props.image && 
					<div className="image">
						<img src={props.image} />
					</div>}
				<div className="title">
					{props.title}
				</div>
				<div className="subtitle">
					{props.subtitle}
				</div>
				<div className="other">
					{props.other}
				</div>
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
				</div>
			</Component>
		</div>
	);
}

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
	onCloseClick: PropTypes.func,
};

Item.defaultProps = {
	title: 'Ivyrevel',
	subtitle: 'PLAGE  - Halsband - black',
	image: 'https://mosaic01.ztat.net/vgs/media/pdp-gallery/IV/45/1L/02/PQ/11/IV451L02P-Q11@10.1.jpg',
	discount: '179,00 kr',
	price: '134,00 kr',
	component: 'a',
};

export default Item;