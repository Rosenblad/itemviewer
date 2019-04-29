import React from 'react';
import PropTypes from 'prop-types';
// @ts-ignore
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

    // @ts-ignore
    this.fuse = new Fuse(this.props.items, options);
  }

  fuse = null;

  // @ts-ignore
  handleChange = e => {
    const { value } = e.target;
    this.setState({ query: value });

    if (this.fuse) {
      // @ts-ignore
      const searchResult = this.fuse.search(value);
      // @ts-ignore
      const ids = searchResult.map(v => v.id);

      // @ts-ignore
      if (this.props.onChange) {
        // @ts-ignore
        this.props.onChange({ ids });
      }
    }
  };

  // @ts-ignore
  handleSelect = selectedOption => {
    console.log('handleSelect', selectedOption);
    this.setState({ selectedOption });
  };

  handleSubmit() {
    console.log('handleSubmit');
  }

  render() {
    const { selectedOption } = this.state;
    // @ts-ignore
    const value = selectedOption && selectedOption.value;

    return (
      <form onSubmit={this.handleSubmit}>
        <Select
          name="search"
          value={value}
          arrowRenderer={null}
          onChange={this.handleSelect}
          // @ts-ignore
          options={this.props.items}
          openOnClick={false}
          placeholder="Search..."
        />
      </form>
    );
  }
}

// @ts-ignore
Search.propTypes = {
  items: PropTypes.array.isRequired,
  onChange: PropTypes.func,
};

export default Search;
