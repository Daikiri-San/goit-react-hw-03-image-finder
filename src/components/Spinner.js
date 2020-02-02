import React from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const SpinnerContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  z-index: 1100;
  width: 18rem;
  height: 18rem;
  pointer-events: none;
`;

function Spinner() {
  return (
    <SpinnerContainer>
      <Loader type="ThreeDots" color="#ff1212" height={144} width={144} />
    </SpinnerContainer>
  );
}

export default Spinner;
