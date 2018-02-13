const puppeteer = require('puppeteer');
const fs = require('fs-extra');
const credentials = require('./credentials');
const cheerio = require('cheerio');
const { parseHtml } = require('../parsers/zalando');
const path = require('path');

const { username: email, password } = credentials.zalando;

const targetUrl = 'https://www.zalando.se/wishlist/';

const selectors = {
	emailInput: 'input[name="login.email"]',
	passwordInput: 'input[name="login.password"]',
	scrollAnchor: 'z-navigation-footer_subFooterIconsLabel',
};

const browserOptions = {
	slowMo: 8,
	devtools: true,
	headless: false,
};

const outputPath = path.resolve(__dirname, '../data/zalando.json');

(async () => {
	try {
		const browser = await puppeteer.launch(browserOptions);
		const page = await browser.newPage();

		await page.goto(targetUrl);

		await page.type(selectors.emailInput, email);
		await page.type(selectors.passwordInput, password);
		await page.keyboard.press('Enter');

		await page.waitForNavigation();
		await page.goto(targetUrl);

		const html = await page.evaluate((_) => {
			const { setTimeout, scrollTo } = window;
			const { scrollHeight } = document.body;

			scrollTo(0, scrollHeight);

			return new Promise((resolve, reject) => {
				setTimeout(() => {
					const items = document.querySelector('#z-aladdin-cardList');
					return resolve(items.outerHTML);
				}, 5000);
			});
		});

		const result = parseHtml(html);
		fs.outputFileSync(outputPath, JSON.stringify(result));

		await browser.close();
	} catch (err) {
		console.error(err);
	}
})();
