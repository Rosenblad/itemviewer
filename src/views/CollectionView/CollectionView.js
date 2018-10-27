import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SearchContainer from 'containers/SearchContainer';
import ItemViewerContainer from 'containers/ItemViewerContainer';
import { getCollectionItemsByCollectionId } from 'state/entities/selectors';
import Collection404 from './Collection404';

class CollectionView extends React.Component {
	render() {
		const { items } = this.props;

		if (items.length > 0) {
			return <ItemViewerContainer items={items} toolbar={<SearchContainer />} />;
		}

		return <Collection404 />;
	}
}

CollectionView.propTypes = {
	// eslint-disable-next-line react/no-unused-prop-types
	match: PropTypes.object.isRequired,
	items: PropTypes.array.isRequired,
};

const Connected = connect((state, ownProps) => {
	const { collectionId } = ownProps.match.params;
	return {
		items: getCollectionItemsByCollectionId(state, collectionId),
	};
})(CollectionView);

export default Connected;
