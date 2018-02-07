const fs = require('fs');
const cheerio = require('cheerio');
const url = require('url');
const uuid = require('uuid');

const parseHtml = html => {
	const $ = cheerio.load(html);

	const selectors = {
		container: '#z-aladdin-cardList',
		card: '.z_wishlist_griddie__block_item___fbCnf',
		image: 'img',
		title: '.z_wishlist_card-info__info_brandName___148OF',
		subtitle: '.z_wishlist_card-info__info_name_wrappedCol_td___RCzpf',
		price: '.z_wishlist_price__price___256K6',
		discount: '.z_wishlist_price__price_original___1D58k',
		discountedPrice: '.z_wishlist_price__price_discounted___ut73F'
	};

	const items = [];

	$.root().find(selectors.card).map(function() {

		const image = $(this).find(selectors.image).attr('src');
		const title = $(this).find(selectors.title).text();
		const subtitle = $(this).find(selectors.subtitle).text();
		const price = $(this).find(selectors.price).text();
		const discount = $(this).find(selectors.discount).text();
		const discountedPrice = $(this).find(selectors.discountedPrice).text();

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

		items.push({
			id: uuid.v4(),
			image,
			title,
			subtitle,
			price,
			discount,
			discountedPrice,
			src,
		});

	});

	return items;
}

const input = fs.readFileSync(__dirname + '/../../zalando.html')
	.toString();

const items = parseHtml(input);


		// const item = processHtml(
		// 	inputData[inputData.length - 1]
		// 		.replace(/("{2}|"$)/g, '"')
		// );

fs.writeFileSync(__dirname + '/dist/wishlist.json', JSON.stringify(items));

module.exports = {
	parseHtml,
};