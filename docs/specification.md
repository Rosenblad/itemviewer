# Itemviewer specification

Itemviewer displays items from collections of data visually.

## The item

__Functionality__

- Visual feedback when mousing over parts that can be interacted with.
- Collapses gracefully when provided data is inconsistent.
- Shows actions as buttons at the bottom of the card.
- When clicking the thumbnail open the image for viewing in full size.

__Data table__

| Name | Type | Value |
| --- | ---:|:---:|
| id | string | null |
| thumbnail | file | null |
| [images](#image) | array | null |
| permalink | string | null |
| [title](#title) | string | null |
| [subtitle](#subtitle) | string | null |
| price | number | null |
| currency | string | null |
| description | text | null |
| sale | number | 0 |
| [custom_attributes](#custom-attributes) |  array | null |
| source | string | null |
| tags | array | null |
| favorited | bool | false |
| hidden | bool | false |

### Image
---

__Data table__

| Name | Type | Value |
| --- | ---:|:---:|
| id | string | null |
| name | string | null |
| width | number | null |
| height | number | null |

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

| Name | Type | Value | 
| --- | --- | --- |
| id | number | 0 |
| name | string | null |

## The collection

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