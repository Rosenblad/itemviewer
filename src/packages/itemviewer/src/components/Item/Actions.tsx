import * as React from 'react';
import './Actions.css';

interface IActionsProps {
  actions: {
    label?: string;
    onClick?(): void;
  }[];
}

function Actions(props: IActionsProps): JSX.Element {
  const { actions } = props;

  return (
    <div className="Item-actions">
      {actions.map(
        ({ label, ...other }): JSX.Element => (
          <button type="button" key={label} className="Item-action" {...other}>
            {label}
          </button>
        ),
      )}
    </div>
  );
}

Actions.defaultProps = {
  actions: [],
};

export default Actions;
