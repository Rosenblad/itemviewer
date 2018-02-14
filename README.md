# Todo

> Sorted by priority.

__Not done__

+ App
	- Plugin API for internal plugins (add menu items, actions etc)
	- Replace create-react-app with react-static

+ ItemViewer
	+ Search
		- Simple search (https://github.com/krisk/Fuse)
		- Autosuggest (http://react-autosuggest.js.org/)
		- Advanced search
	- Click to enlarge image
	- Lazy load results
	- Add choice to choose list or grid layout
	- Option to choose how many items per row
	- Option to compare
	- Sort by price
	- Sort by name
	- Drag and drop to sort
	- Navigate selected item with keyboard
	- Selected item keyboard actions
	- Show less columns on medium sizes
	- Ability to undo actions
	- Only the title should open product detail page (alt extend icon)

+ Testing
	- Write integration tests
	- Write unit tests
	- Add test coverage

+ Collections
	- Create after importing items
	- Normalize items
	- Move items between collections

- Click to view entire item
- Convert to CSS Modules or cssinjs
- Improve actions style

- Write a crawler for blocket
- Write a crawler for prisjakt
- Write a crawler for goodreads
- Write a crawler for recepten
- Write a crawler for youtube

- Trigger crawls from the app
- Quick preview more info
- Save list for later
- Preload url and open in app

+ Write a crawling tool

__Low Prio / Maybe__

- Add list from clipboard
- Paste in HTML and pass selectors

__Done__

- Open in new tab when clicking item
- Parse scraped data
- Add remove icon to item
- Setup redux
- Setup redux devtools
- Remove immutable
- Add localStorage and rehydrate from it
- Add clickable space between items
- Display items from state
- Use more columns if screen is big
- Upload to github
- Remove only this session (hide)
- Remove permanently (delete) from local storage
- Add unit tests for reducers
- Add unit tests for actions
- Rewrite zalando crawler using puppeteer
- Move credentials to a gitignored file
- Write a crawler for zalando

- Collections
	- Route
	- List
	- Delete
	- Create collection