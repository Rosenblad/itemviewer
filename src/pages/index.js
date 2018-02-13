import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
} from 'react-router-dom';

import ViewCollection from './CollectionViewer/components/ViewCollection';
import CollectionViewerPage from './CollectionViewer';

const Pages = () => (
	<Router>
		<div>
			<ul>
				<li><Link to="/">Collection Viewer</Link></li>
			</ul>

			<Route exact path="/" component={CollectionViewerPage} />
			<Route path="/collection/:collectionId" component={ViewCollection} />
		</div>
	</Router>
);

export default Pages;
