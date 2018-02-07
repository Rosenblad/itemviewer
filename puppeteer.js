/**
 * Puppeteer
 */

class Puppeteer {
	// Puppeteer module provides a method to launch a Chromium instance.
	launch() {
		return Promise(Browser);
	}
	connect() {}
}

puppeteer.launch().then(async browser => {
	const page = await browser.newPage();
	await page.goto();
	await page.content();
	// other actions...
	await browser.close();
}

/**
 * Browser
 */

class Browser extends EventEmitter {
	// A Browser is created when Puppeteer connects to a Chromium instance, either through puppeteer.launch or puppeteer.connect.
}

// Using a Browser to create a Page:
puppeteer.launch().then(async browser => {
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await browser.close();
});

// Disconnecting from and reconnecting to a Browser:
puppeteer.launch().then(async browser => {
  // Store the endpoint to be able to reconnect to Chromium
  const browserWSEndpoint = browser.wsEndpoint();
  // Disconnect puppeteer from Chromium
  browser.disconnect();

  // Use the endpoint to reestablish a connection
  const browser2 = await puppeteer.connect({browserWSEndpoint});
  // Close Chromium
  await browser2.close();
});

/**
 * Page
 */

class Page extends EventEmitter {
	// Page provides methods to interact with a single tab in Chromium. One Browser instance might have multiple Page instances.
	goto(url, options) {
		return Promise(?Response)
	}
	frames() {
		return Array[Frame]
	}
	waitForSelector() {}
	waitForNavigation(options) {
		return Promise(Response);
	}
	mainFrame() {
		// Page is guaranteed to have a main frame which persists during navigations.
		return Frame
	}
	bringToFront() {
	// Brings page to front (activates tab).
		return Promise;
	}
	keyboard() {
		return Keyboard
	}
	reload(options) {
		return Promise(Response); // Promise which resolves to the main resource response. In case of multiple redirects, the navigation will resolve with the response of the last redirect.
	}
	screenshot(options = {}) {
		return Promise(Buffer); // Promise which resolves to buffer with captured screenshot.
	}
	evaluate(fn, ...args) {
		// If the function, passed to the page.evaluate, returns a Promise, then page.evaluate would wait for the promise to resolve and return its value.
		// If the function passed into page.evaluate returns a non-Serializable value, then page.evaluate resolves to undefined. Passing arguments to pageFunction.
		return Promise(Serializable); // Resolves to the return value of pageFunction
	}
	click(selector = '', options = { button: '', clickCount: 1, delay: 0 }) {
		// A selector to search for element to click.
		return Promise
	}
	focus(selector) {}
	select(selector, ...values) {
		// Values of options to select. If the <select> has the multiple attribute, all values are considered, otherwise only the first one is taken into account.
		return Promise(['']);
	}
	hover(selector) {}
	type(selector, text, options) {
		return Promise();
	}
	url() {
		return '';
	}
	close() { return Promise }
	content() {
		// Gets the full HTML contents of the page, including the doctype.
		return Promise('');
	}
	queryObjects(prototypeHandle = JSHandle) {
		// Iterates JavaScript heap and finds all the objects with the given prototype.
		return Promise(JSHandle);
	}
	// Inherited
	eventKeys = ['console'];
	once(eventKey, fn) {}
	on(eventKey, fn) {}
}

// Handling console event:
page.on('console', msg => {
  for (let i = 0; i < msg.args().length; ++i)
    console.log(`${i}: ${msg.args()[i]}`);
});
page.evaluate(() => console.log('hello', 5, {foo: 'bar'}));

// Create a Map object
await page.evaluate(() => window.map = new Map());
// Get a handle to the Map object prototype
const mapPrototype = await page.evaluateHandle(() => Map.prototype);
// Query all map instances into an array
const mapInstances = await page.queryObjects(mapPrototype);
// Count amount of map objects in heap
const count = await page.evaluate(maps => maps.length, mapInstances);
await mapInstances.dispose();
await mapPrototype.dispose();

/**
 * Frame
 */

class Frame {
	// Frame object's lifecycle is controlled by three events, dispatched on the page object
	// - frameattached
	// - framenavigated
	// - framedetached
	childFrames() {
		return Array(Frame)
	}
	$(selector) {
		// The method queries frame for the selector. If there's no such element within the frame, the method will resolve to null.
		return Promise(?ElementHandle);
	}
	$$(selector) {
		// The method runs document.querySelectorAll within the frame. If no elements match the selector, the return value resolve to [].
		return Promise([ElementHandle])
	}
	$x(expression) {
		// Evaluates the XPath expression
		return Promise(Array[ElementHandle])
	}
	$$eval(selector, pageFunction[, ...args]) {
		// This method runs document.querySelectorAll within the page and passes it as the first argument to pageFunction.
		// If pageFunction returns a Promise, then page.$$eval would wait for the promise to resolve and return its value.
		return Promise(Serializable);
	}
	$eval(selector, pageFunction[, ...args]) {
		// This method runs document.querySelector within the page and passes it as the first argument to page pageFunction. If there's no element matching selector, the method throws an error.
		// If pageFunction returns a Promise, then page.$eval would wait for the promise to resolve and return its value.
		return Promise(Serializable);
	}
	executionContext() {
		return Promise(ExecutionContext);
	}
	addScriptTag(options) {
		// url
		// path
		// content
		return Promise(ElementHandle); // Which resolves to the added tag when the script's onload fires or when the script content was injected into frame.
	}
}

puppeteer.launch().then(async browser => {
	const page = await browser.newPage();
  await page.goto('https://www.google.com/chrome/browser/canary.html');
  dumpFrameTree(page.mainFrame(), '');
  await browser.close();

  function dumpFrameTree(frame, indent) {
    console.log(indent + frame.url());
    for (let child of frame.childFrames())
      dumpFrameTree(child, indent + '  ');
  }
});

/**
 * ExecutionContext
 */

class ExecutionContext {
	// The class represents a context for JavaScript execution.
	// - Each frame has a separate execution conrext
	// - All kind of workers have their own contexts
	evaluate(pageFunction, ...args) {
		// If the function passed tot he executionContext.evaluate, returns a Promise, then executionContext.evaluate would wait for the promise to resolve and reutn its value.
		// A string can also be passed in instead of a function.
		// JSHandle instances can be passed as arguments
		return Promise(Serializable);
	}
	evaluateHandle(pageFunction, ...args) {
		// If the function, passed to the page.evaluateHandle returns a Promise, then page.evaluateHandle would wait for the promise to resolve and return its value.
		return Promise(JSHandle);
	}


}

/**
 * JSHandle
 */

class JSHandle {
	// JSHandle represents an in-page JavaScript object. JSHandles can be created with the page.evaluateHandle method.
	asElement() {}
	dispose() {}
	executionContext() {}
	getProperties() {}
	getProperty() {}
	jsonValue() {}
}

/**
 * ElementHandle
 */

class ElementHandle extends JSHandle {
	// ElementHandle represents an in-page DOM element. ElementHandles can be created with the page.$ method.
	$(selector) {}
	$$(selector) {}
	$x(expression) {
		// The method evaluates the XPath expression.
	}
	asElement() {}
	boundingBox() {}
	click(options) {
		const button = oneOf(['left', 'right', 'middle', 'left']);
		const clickCount = 1;
		const delay = 0;
		return Promise;
	}
	focus() {
		// Calls focus on the element.
		return Promise;
	}
	hover() {
		// Scrolls element into view if needed, and then uses page.mouse to hover over the center of the element. If the element is detached from DOM, the method throws an erorr.
		return Promise;
	}
	press() {}
	screenshot(options) {
		// Scrolls element into view if needed, and then uses page.screenshot to take a screenshot of the element. If the element is detached from DOM, the method throws an error.
		return Promise(Buffer);
	}
	toString() {}
	type() {}
	uploadFile() {}
	executionContext() {
		return ExecutionContext;
	}
	dispose() {
		// The elementHandle.dispose method stops referencing the element handle
		return Promise;
	}
}

puppeteer.launch().then(async browser => {
  const page = await browser.newPage();
  await page.goto('https://google.com');
  const inputElement = await page.$('input[type=submit]');
  await inputElement.click();
  // ...
});

/**
 * Mouse
 */

// Specification

class Mouse {
	click(x, y, options) {
		return Promise;
	}
	down(options) {
		options.button = oneOf(['left', 'right', 'middle', 'left']);
		options.clickCount = 1;
		// Dispatches a mousedown event.
		return Promise;
	}
	up(options) {
		// Dispatches a mouseup event.
		return Promise;
	}
	move(x = 0, y = 0, options = { steps: 1 }) {
		// Dispatches a mousemove event.
		return Promise;
	}
}

/**
 * Keyboard
 */

class Keyboard {
	down(key, options) {
		// Dispatches a keydown event.
		// If key is a single character and no modifier keys besides Shift are being held down, a keypress/input event will also be generated. The text option can be specified to force an input event to be generated.
		// If key is a modified key, Shift, Meta, Control, or Alt, subsequent key presses will be sent with that modified active. To release the modified key, use keyboard.up.
		// After the key is pressed once, subsequent calls to keyboard.down will have repeat set to true. To release the key, use keyboard.up.
		// NOTE: Midified keys DO influence keyboard.down. Holding down Shift will type the text in upper case.
		key = 'ArrowLeft'; // See USKeyboardLayout for a list of all key names.
		options.text = 'If specified, generates an input event with this text.';
		return Promise;
	}
}