import React from 'react';
import { storiesOf } from '@storybook/react';
import ItemViewer, { Item, ListItems } from '../../src/packages/itemviewer/src';

const stories = storiesOf('ItemViewer', module);

const itemProps = {
	"id": "7467d3e2-5003-4b17-9986-d5ec70b7ed6b",
	"image": "https://mosaic01.ztat.net/vgs/media/pdp-gallery/IV/45/1L/02/PQ/11/IV451L02P-Q11@10.1.jpg",
	"title": "Ivyrevel",
	"subtitle": "PLAGE  - Halsband - black",
	"price": "",
	"discount": "179,00 kr",
	"discountedPrice": "116,00 kr",
	"src": "https://www.zalando.se/ivyrevel-plage--halsband-black-iv451l02p-q11.html"
};

stories.add('Item', () => <Item {...itemProps} />);

const listItemsProps = {
	items: [
		{
				"id": "7467d3e2-5003-4b17-9986-d5ec70b7ed6b",
				"image": "https://mosaic01.ztat.net/vgs/media/pdp-gallery/IV/45/1L/02/PQ/11/IV451L02P-Q11@10.1.jpg",
				"title": "Ivyrevel",
				"subtitle": "PLAGE  - Halsband - black",
				"price": "",
				"discount": "179,00 kr",
				"discountedPrice": "116,00 kr",
				"src": "https://www.zalando.se/ivyrevel-plage--halsband-black-iv451l02p-q11.html"
		},
		{
				"id": "70effcc4-db2b-4b7c-ad44-c9dfe2fe16cf",
				"image": "https://mosaic01.ztat.net/vgs/media/pdp-gallery/A0/15/1L/02/MQ/11/A0151L02M-Q11@10.jpg",
				"title": "ALDO",
				"subtitle": "HANNIFAN - Halsband - black",
				"price": "",
				"discount": "159,00 kr",
				"discountedPrice": "127,00 kr",
				"src": "https://www.zalando.se/aldo-hannifan-halsband-black-a0151l02m-q11.html"
		},
		{
				"id": "00c6574c-e840-4383-8b4a-c47de53147a5",
				"image": "https://mosaic01.ztat.net/vgs/media/pdp-gallery/PE/35/1L/07/2Q/11/PE351L072-Q11@10.1.jpg",
				"title": "Pieces",
				"subtitle": "PCROSILLE CHOKER - Halsband - black",
				"price": "249,00 kr",
				"discount": "",
				"discountedPrice": "",
				"src": "https://www.zalando.se/pieces-pcrosille-choker-halsband-black-pe351l072-q11.html"
		},
		{
			"id": "558c870c-b306-4252-84e9-73c0ebbbaa6b",
			"image": "https://mosaic01.ztat.net/vgs/media/pdp-gallery/ON/24/1E/00/BK/12/ON241E00B-K12@10.jpg",
			"title": "Onzie",
			"subtitle": "HIGH RISE - Tights - navy python",
			"price": "749,00 kr",
			"discount": "",
			"discountedPrice": "",
			"src": "https://www.zalando.se/onzie-high-rise-tights-navy-python-on241e00b-k12.html"
		},
		{
			"id": "117b6faf-9767-43f5-9da4-faff12a18b6f",
			"image": "https://mosaic01.ztat.net/vgs/media/pdp-gallery/FP/04/1E/01/3T/11/FP041E013-T11@8.jpg",
			"title": "Free People",
			"subtitle": "FREE LOVE - Tights - black combo",
			"price": "799,00 kr",
			"discount": "",
			"discountedPrice": "",
			"src": "https://www.zalando.se/free-people-free-love-tights-black-combo-fp041e013-t11.html"
		},
	]
};

stories.add('ListItems', () => <ListItems {...listItemsProps} />);
// @ts-ignore
stories.add('ItemViewer', () => <ItemViewer {...listItemsProps} />);
