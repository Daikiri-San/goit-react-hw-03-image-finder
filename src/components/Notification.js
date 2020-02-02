import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
  display: inline-block;
  margin: 0 auto;
  font-weight: 700;
  margin-top: 8rem;
  font-size: 5rem;
`;

function Notification({ message }) {
  return <Text>{message}</Text>;
}

export default Notification;
