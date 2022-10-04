import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

const sizes = {
  large: {
    height: '3rem',
    fontSize: '1.25rem'
  },
  medium: {
    height: '2.25rem',
    fontSize: '1rem'
  },
  small: {
    height: '1.75rem',
    fontSize: '0.875rem'
  }
}
const sizeStyles = css`
  ${({ size }) => css`
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
  `}
`

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

  ${sizeStyles}

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

function Button({ children, color, size, ...rest }) {
  return (
    <StyledButton 
      color={color}
      size={size}
      {...rest}
    >
      {children}
    </StyledButton>
  )
}

Button.defaultProps = {
  color: 'blue',
  size: 'medium'
}
export default Button;
