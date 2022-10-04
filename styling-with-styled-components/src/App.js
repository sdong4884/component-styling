import React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import Button from './Button';

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: ${props => props.color};
  border-radius: 50%;
  ${props => props.huge && 
    css`
      width: 10rem;
      height: 10rem;
    `}
`

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid #000;
  padding: 1rem;
`

const palette = {
  blue: '#228be6',
  gray: '#496057',
  pink: '#f06595'
}

function App() {
  return (
    <>
      <Circle color="blue" />
      <Circle color="blue" huge />
      <ThemeProvider theme={{
        palette
      }}>
        <AppBlock>
          <Button>BUTTON</Button>
          <Button color="gray">BUTTON</Button>
          <Button color="pink">BUTTON</Button>
        </AppBlock>
      </ThemeProvider>
    </>
  );
}

export default App;
