import React from 'react';
import PropTypes from 'prop-types';
// @ts-ignore
import Link from 'react-router-dom/Link';
import styled from 'styled-components';

import ListItemActions from './ListItemActions';

const RootEl = styled.li`
  box-sizing: border-box;
  height: 48px;
  padding: 0 16px;
  position: relative;
  border-bottom: 1px solid #eeeeee;
  display: flex;
  justify-content: space-between;

  &:hover {
    background: #ccc;
  }
`;

const StyledLink = styled(Link)`
  color: rgba(0, 0, 0, 0.87);
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 16px;
  text-decoration: none;
  font-size: 20px;
`;

// @ts-ignore
const ListItem = props => {
  // @ts-ignore
  const handleDeleteClick = event => {
    props.onDeleteClick(event, props.id);
  };

  return (
    <RootEl>
      <StyledLink to={`/collection/${props.id}`}>{props.name}</StyledLink>
      <ListItemActions onDeleteClick={handleDeleteClick} />
    </RootEl>
  );
};

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default ListItem;
