import React, { useState } from 'react';
import debounce from 'debounce';
import './ItemImage.css';

interface ItemImageProps {
	image?: string;
	alt?: string;
	imageRef(node: HTMLImageElement): void;
}

function ItemImage(props: ItemImageProps) {

	const [image, setImage] = useState({
		height: 0,
		width: 0,
		naturalWidth: 0,
		naturalHeight: 0,
	});

	const imgNode = React.createRef();

	const updateImage = debounce(() => {
		setImage({
				height: imgNode.height,
				width: imgNode.width,
				naturalWidth: imgNode.naturalWidth,
				naturalHeight: imgNode.naturalHeight,
			},
		});

		if (this.imgNode.height !== image.height) {
			setTimeout(this.updateImage, 10);
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

	const {
		image,
		imageRef,
		alt,
		...other
	} = props;
	let height;

		if (image) {
			const ratio = image.naturalWidth / image.naturalHeight;

			height = image.width * ratio;
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

export default ItemImage;
