import React from 'react';
import styled from 'styled-components';

function MyButton({ className, children }) {
  return <button className={className}>MyButton {children}</button>;
}

const StyledButton = styled(MyButton)`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  font-size: 1em;
`;

export default StyledButton;
