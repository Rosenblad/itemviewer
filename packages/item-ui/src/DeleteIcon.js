import React from 'react';
import styled from 'styled-components';
import DeleteIconSvg from './waste-bin.svg';

const IconWrapper = styled.div`
	fill: black;
	opacity: 0.4;
	z-index: 2000;
	transition: opacity 225ms ease-in-out;
	cursor: pointer;
`;

const DeleteIcon = () => (
	<IconWrapper>
		<img src={DeleteIconSvg} />
	</IconWrapper>
);

export default DeleteIcon;
