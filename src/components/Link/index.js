import React from 'react'
import { Link as RebassLink } from 'rebass'
import { Link as RouterLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { lighten, darken } from 'polished'

const WrappedLink = ({ external, children, ...rest }) => (
  <RebassLink
    target={external ? '_blank' : null}
    rel={external ? 'noopener noreferrer' : null}
    color="#FAD230"
    {...rest}
  >
    {children}
  </RebassLink>
)

WrappedLink.propTypes = {
  external: PropTypes.bool,
}

const Link = styled(WrappedLink)`
  color: ${({ color, theme }) => (color ? color : theme.link)};
  font-weight: bold;
`

export default Link

export const CustomLink = styled(RouterLink)`
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  fontWeight: 
  color: ${({ color, theme }) => (color ? color : theme.link)};

  &:visited {
    color: ${({ color, theme }) => (color ? lighten(0.1, color) : lighten(0.1, theme.link))};
  }

  &:hover {
    cursor: pointer;
    text-decoration: none;
    underline: none;
    color: ${({ color, theme }) => (color ? darken(0.1, color) : darken(0.1, theme.link))};
  }
`

export const BasicLink = styled(RouterLink)`
  text-decoration: none;
  color: inherit;
  &:hover {
    cursor: pointer;
    text-decoration: none;
    underline: none;
  }
`
