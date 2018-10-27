import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import Fuse from 'fuse.js';

class Search extends React.Component {
	state = {
		query: '',
		selectedOption: '',
	};

	componentDidMount() {
		const options = {
			keys: ['title', 'subtitle'],
			threshold: 0.1,
		};

		this.fuse = new Fuse(this.props.items, options);
	}

	fuse = null;

	handleChange = (e) => {
		const { value } = e.target;
		this.setState({ query: value });

		if (this.fuse) {
			const searchResult = this.fuse.search(value);
			const ids = searchResult.map(v => v.id);

			if (this.props.onChange) {
				this.props.onChange({ ids });
			}
		}
	};

	handleSelect = (selectedOption) => {
		console.log('handleSelect', selectedOption);
		this.setState({ selectedOption })
	}

	handleSubmit() {
		console.log('handleSubmit');
	}

	render() {
		const { selectedOption } = this.state;
		const value = selectedOption && selectedOption.value;

		return (
			<form onSubmit={this.handleSubmit}>
				<Select
					name="search"
					value={value}
					arrowRenderer={null}
					onChange={this.handleSelect}
					options={this.props.items}
					openOnClick={false}
					placeholder="Search..." />
			</form>
		);
	}
}

Search.propTypes = {
	items: PropTypes.array.isRequired,
	onChange: PropTypes.func,
};

export default Search;
