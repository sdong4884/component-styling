import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';



const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-weight: bold;
  padding: 0 1rem;
  cursor: pointer;

  height: 2.25rem;
  font-size: 1rem;

  ${({ theme, color }) => {
    const selected = theme.palette[color];
    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
    `
  }}
  /* background: ${props => props.theme.palette.blue};
  &:hover {
    background: ${props => lighten(0.1, props.theme.palette.blue)};
  }
  &:active {
    background: ${props => darken(0.1, props.theme.palette.blue)};
  } */

  & + & {
    margin-left: 1rem;
  }
`

function Button({ children, color, ...rest }) {
  return (
    <StyledButton 
      color={color}
      {...rest}
    >
      {children}
    </StyledButton>
  )
}

Button.defaultProps = {
  color: 'blue'
}
export default Button;
