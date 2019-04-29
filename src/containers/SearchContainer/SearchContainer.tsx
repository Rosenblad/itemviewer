import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Search from '../../components/Search';
import { getAutocompleteData } from './selectors';
import { setVisibleItems } from './actions';

class SearchContainer extends React.Component {
  render() {
    // @ts-ignore
    const { items, setVisibleItems } = this.props;

    return (
      // @ts-ignore
      <Search items={items} onChange={setVisibleItems} />
    );
  }
}

// @ts-ignore
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
