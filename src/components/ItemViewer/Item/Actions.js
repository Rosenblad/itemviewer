import React from 'react';
import PropTypes from 'prop-types';

import CloseIcon from './Close';
import './Actions.css';

const Actions = ({ id, onHide }) => (
	<div className="actions">
		<div className="close" onClick={() => onHide(id)}>
			<CloseIcon />
		</div>
	</div>
);

Actions.propTypes = {
	id: PropTypes.string.isRequired,
	onHide: PropTypes.func,
};

export default Actions;