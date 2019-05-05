import React from 'react';
import { Link } from 'react-router-dom';
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

interface ListItemProps {
  id: string;
  onDeleteClick: (event: MouseEvent, id: string) => void;
  name: string;
}

function ListItem({ id, onDeleteClick, name }: ListItemProps): JSX.Element {
  const handleDeleteClick = (event: MouseEvent): void => {
    onDeleteClick(event, id);
  };

  return (
    <RootEl>
      <StyledLink to={`/collection/${id}`}>{name}</StyledLink>
      <ListItemActions onDeleteClick={handleDeleteClick} />
    </RootEl>
  );
}

export default ListItem;
