import React from 'react';
import PropTypes from 'prop-types';
import debounce from 'debounce';
import './ItemImage.css';

class ItemImage extends React.Component {

	state = {
		image: {
			height: 0,
			width: 0,
			naturalWidth: 0,
			naturalHeight: 0,
		},
	};

	imgNode = null;

	updateImage = debounce(() => {
		this.setState({
			image: {
				height: this.imgNode.height,
				width: this.imgNode.width,
				naturalWidth: this.imgNode.naturalWidth,
				naturalHeight: this.imgNode.naturalHeight,
			},
		});

		if (this.imgNode.height !== this.state.image.height) {
			setTimeout(this.updateImage(), 10);
		}
	}, 100);

	imgRef = node => {
		this.imgNode = node;

		node.addEventListener('load', event => {
			this.updateImage();

			window.addEventListener('resize', () => {
				this.updateImage();
			});
		});
	};

	render() {
		const {
			image,
			alt,
			...other
		} = this.props;
		let height;

		if (this.state.image) {
			const ratio = this.state.image.naturalWidth / this.state.image.naturalHeight;

			height = this.state.image.width * ratio;
		}

		return (
			<img 
				style={height ? { height } : {}}
				src={image}
				alt={alt}
				ref={imageRef}
				{...other} />
		);
	}

}

ItemImage.propTypes = {
	image: PropTypes.string,
	alt: PropTypes.string,
};

export default ItemImage;