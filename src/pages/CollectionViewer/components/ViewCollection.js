import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ItemViewer from 'pages/ItemViewer';
import { itemsByCollectionId } from 'selectors/collections';
import Collection404 from './Collection404';

class ViewCollection extends React.Component {
	render() {
		const { items } = this.props;

		if (items.length > 0) {
			return <ItemViewer items={items} />;
		}

		return <Collection404 />;
	}
}

ViewCollection.propTypes = {
	// collectionId: PropTypes.string.isRequired,
	// match: PropTypes.object.isRequired,
	items: PropTypes.array.isRequired,
};

const Connected = connect((state, ownProps) => {
	const { collectionId } = ownProps.match.params;
	return {
		items: itemsByCollectionId(state, collectionId),
	};
})(ViewCollection);

export default Connected;
