# Todo

> Sorted by priority.

- Discard item-ui
- Restructure to use route pattern instead of container pattern
- Rewrite Item component
- Implement CSS Grid
- Clean up dependencies
- Drag and drop
- Add Save button
- App
  - Plugin API for internal plugins (add menu items, actions etc)
  - Move application state to respective application
  - Normalize data
- Click to view entire item
- Convert to CSS Modules or cssinjs
- Quick preview more info
- Save list for later
- Preload url and open in app

# Specification

Itemviewer allows you to browse and sort through items from collections of data visually.

## ItemViewer

__Functionality__

- Visual feedback when mousing over parts that can be interacted with.
- Collapses gracefully when there is missing data.
- Shows actions as buttons at the bottom of the card.
- When clicking the thumbnail open the image for viewing in full size.

__Data table__

| Name                                    |   Type | Value |
| --------------------------------------- | -----: | :---: |
| id                                      | string | null  |
| thumbnail                               |   file | null  |
| [images](#image)                        |  array | null  |
| permalink                               | string | null  |
| [title](#title)                         | string | null  |
| [subtitle](#subtitle)                   | string | null  |
| price                                   | number | null  |
| currency                                | string | null  |
| description                             |   text | null  |
| sale                                    | number |   0   |
| [custom_attributes](#custom-attributes) |  array | null  |
| source                                  | string | null  |
| tags                                    |  array | null  |
| favorited                               |   bool | false |
| hidden                                  |   bool | false |

### Image
---

__Data table__

| Name   |   Type | Value |
| ------ | -----: | :---: |
| id     | string | null  |
| name   | string | null  |
| width  | number | null  |
| height | number | null  |

### Title
---

__Functionality__

- When a title exceeds it's assigned space it will ellipse.
- Doesn't linebreak.

### Subtitle
---

__Functionality__

- When a subtitle exceeds it's assigned space it will ellipse.
- Doesn't linebreak.

### Tags
---

__Functionality__

- Visual feedback when mousing over if there is an action attached to the element.
- Can show a delete icon with an action attached to it

__Data table__

| Name | Type   | Value |
| ---- | ------ | ----- |
| id   | number | 0     |
| name | string | null  |

## CollectionViewer

A collection stores items.

When viewing a collection you can:

- Drag and drop items to sort them.
- Choose if you want the items to render as rows or as cards.
- Choose scale of items in collection.
- Choose weather to show or hide thumbnails.
- Search for items in the collection

Public information:

- Title
- Thumbnail
- Link
- [array] Items

Private information:

Persistent:

- Id
- Layout (rows/cards)
- Item scale
- Hide thumbnails

State:

- Search query

## ApiBrowser

- Takes an API root and query/route map
- Calls backend passing API, query params and route
- Backend makes a request to the API, caches and sends back the response
- Lists results using itemviewer
- If an item for example is deleted it's sent to the backend which remembers it
