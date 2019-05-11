import * as React from 'react';
import styled from 'styled-components';
import CloseIconSvg from './cancel-music.svg';

const IconWrapper = styled.div`
  fill: black;
  opacity: 0.4;
  z-index: 2000;
  transition: opacity 225ms ease-in-out;
  cursor: pointer;
`;

export default function CloseIcon(): JSX.Element {
  return (
    <IconWrapper>
      <img src={CloseIconSvg} />
    </IconWrapper>
  );
}
