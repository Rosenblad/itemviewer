import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Item from './Item';
import { hideItem } from '../../actions/item';
import './Viewer.css';
import Search from './Search';
import ListItems from './ListItems';

class ItemViewer extends React.Component {
	handleCloseClick = (event, id) => {
		event.preventDefault();

		this.props.hideItem(id);
	}

	render() {
		const {
			items,
		} = this.props;

		return (
			<div className="Viewer">
				<Search />
				<ListItems items={items} onCloseClick={this.handleCloseClick} />
			</div>
		);
	}
}

ItemViewer.propTypes = {
	items: PropTypes.array,
	hideItem: PropTypes.func.isRequired,
};

ItemViewer.defaultProps = {
	items: [],
};

const Connected = connect(
	null,
	{ hideItem },
)(ItemViewer);

export default Connected;
