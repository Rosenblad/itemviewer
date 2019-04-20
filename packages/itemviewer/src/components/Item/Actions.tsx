import * as React from 'react';
import './Actions.css';

interface IActionsProps {
	actions: Array<{
		label?: string;
		onClick?(): void;
	}>;
}

function Actions(props: IActionsProps) {
	const { actions } = props;

	return (
		<div className="Item-actions">
			{actions.map(({ label, ...other }) => (
				<button
					key={label}
					className="Item-action"
					{...other}>
					{label}
				</button>
			))}
		</div>
	);
}

Actions.defaultProps = {
	actions: [],
};

export default Actions;
