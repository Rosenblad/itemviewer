const fs = require('fs');
const cheerio = require('cheerio');
const url = require('url');

const processHtml = html => {
	const $ = cheerio.load(html);

	const selectors = {
		image: 'img',
		title: '.z_wishlist_card-info__info_brandName___148OF',
		subtitle: '.z_wishlist_card-info__info_name_wrappedCol_td___RCzpf',
		price: '.z_wishlist_price__price___256K6',
		discount: '.z_wishlist_price__price_original___1D58k',
		discountedPrice: '.z_wishlist_price__price_discounted___ut73F'
	};

	const image = $(selectors.image).attr('src');
	const title = $(selectors.title).text();
	const subtitle = $(selectors.subtitle).text();
	const price = $(selectors.price).text();
	const discount = $(selectors.discount).text();
	const discountedPrice = $(selectors.discountedPrice).text();

	const imagePath = url.parse(image).path
		.split('/')
		.pop()
		.split('@')[0]
		.toLowerCase();

	const titlePath = title.toLowerCase()
		.replace(/&/g, 'and')
		.replace(/\s/g, '-');

	const subtitlePath = subtitle.toLowerCase()
		.replace(/\s-\s/g, '-')
		.replace(/\s/g, '-')
		.replace(/\//g, '')
		.replace(/ä/g, 'ae');

	const src = `https://www.zalando.se/${titlePath}-${subtitlePath}-${imagePath}.html`;

	return {
		image,
		title,
		subtitle,
		price,
		discount,
		discountedPrice,
		src,
	};
}

const input = fs.readFileSync(__dirname + '/../../wishlist.csv')
	.toString();

const inputMap = input.split('\n')
	.filter(input => input);

const inputHeaders = inputMap.shift().split(',');

const inputMapObjs = inputMap.map(input => {
	const inputData = input.split('","');

	if (inputData.length === inputHeaders.length) {
		const item = processHtml(
			inputData[inputData.length - 1]
				.replace(/("{2}|"$)/g, '"')
		);

		return item;;
	} else {
		console.error('Unexpected item:', inputData);
	}
});

fs.writeFileSync(__dirname + '/dist/wishlist.json', JSON.stringify(inputMapObjs));