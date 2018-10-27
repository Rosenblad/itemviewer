import React from 'react';
import PropTypes from 'prop-types';

import CloseIcon from './Close';
import './Actions.css';

const Actions = ({ id, actions }) => (
	<div className="Item-actions">
		{actions.map(({ label, ...other }) =>
			<button 
				key={label} 
				className="Item-action"
				{...other}>
				{label}
			</button>
		)}
	</div>
);

Actions.propTypes = {
	id: PropTypes.string.isRequired,
	actions: PropTypes.arrayOf(PropTypes.shape({
		label: PropTypes.string,
		onClick: PropTypes.func,
	})),
};

Actions.defaultProps = {
	actions: [],
};

export default Actions;