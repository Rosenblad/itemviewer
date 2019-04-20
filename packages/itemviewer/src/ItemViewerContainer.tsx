import * as React from 'react';
import { forceCheck } from 'react-lazyload';
import { connect } from 'react-redux';
import { deleteItem, hideItem } from './actions';
import ItemViewer from './components';
import { getHidden } from './selectors';
import { IItemProps } from './types/index';

interface IProps {
	items: IItemProps[];
	hidden?: [];
	deleteItem?(id: string): void;
	hideItem?(id: string): void;
}

class ItemViewerContainer extends React.Component<IProps> {

	public defaultProps: IProps = {
		items: [],
	};

	public render() {
		const {
			items,
			hidden,
			...other
		} = this.props;

		return (
			<ItemViewer
				items={items}
				onDelete={this.handleDelete}
				onHide={this.handleHide}
				hidden={hidden}
				{...other} />
		);
	}

	private handleHide = (id: string) => {
		if (this.props.hideItem) {
			this.props.hideItem(id);
		}

		forceCheck();
	}

	private handleDelete = (id: string) => {
		if (this.props.deleteItem) {
			this.props.deleteItem(id);
		}

		forceCheck();
	}
}

const Connected = connect(
	(state) => ({
		hidden: getHidden(state),
	}),
	{ hideItem, deleteItem },
)(ItemViewerContainer);

export default Connected;
