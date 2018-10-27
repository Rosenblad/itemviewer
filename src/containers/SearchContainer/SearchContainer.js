import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Search from 'components/Search';
import { getItems } from 'state/entities/selectors';
import { getAutocompleteData } from './selectors';
import { setVisibleItems } from './actions';

class SearchContainer extends React.Component {
	render() {
		const { items, setVisibleItems } = this.props;

		return (
			<Search items={items} onChange={setVisibleItems} />
		);
	}
}

SearchContainer.propTypes = {
	items: PropTypes.array,
	setVisibleItems: PropTypes.func.isRequired,
};

const Connected = connect(
	state => ({
		items: getAutocompleteData(state),
	}),
	{
		setVisibleItems,
	},
)(SearchContainer);

export default Connected;