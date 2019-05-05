import React, { useState } from 'react';
import debounce from 'debounce';

interface ItemImageProps {
  image?: string;
  alt?: string;
}

function ItemImage(props: ItemImageProps): JSX.Element {
  const [imageDimensions, setImageDimensions] = useState({
    height: 0,
    width: 0,
    naturalWidth: 0,
    naturalHeight: 0,
  });

  let imgNode: HTMLImageElement;

  const updateImage = debounce((): void => {
    setImageDimensions({
      height: imgNode.height,
      width: imgNode.width,
      naturalWidth: imgNode.naturalWidth,
      naturalHeight: imgNode.naturalHeight,
    });

    if (imgNode.height !== imageDimensions.height) {
      setTimeout(updateImage, 10);
    }
  }, 100);

  const setImageRef = (node: HTMLImageElement): void => {
    imgNode = node;

    node.addEventListener(
      'load',
      (): void => {
        updateImage();

        window.addEventListener(
          'resize',
          (): void => {
            updateImage();
          },
        );
      },
    );
  };

  const { image, alt } = props;
  let height;

  if (image) {
    const ratio = imageDimensions.naturalWidth / imageDimensions.naturalHeight;

    height = imageDimensions.width * ratio;
  }

  return (
    <img
      style={height ? { height } : {}}
      src={image}
      alt={alt}
      ref={setImageRef}
    />
  );
}

export default ItemImage;
