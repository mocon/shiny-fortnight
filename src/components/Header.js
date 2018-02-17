import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

import Search from "../containers/Search"

const Header = styled.header`
  background: ${props => props.theme.colors.headerBackground};
  border-bottom: ${props => props.theme.border};
  color: ${props => props.theme.colors.default};
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.img`
  width: 200px;
  height: 30px;
`

const Links = styled.nav`
  a {
    color: ${props => props.theme.colors.default};
    transition: color ease-in 0.2s;
    text-transform: none;
    text-decoration: none;
    outline: none;
    + a {
      margin-left: 30px;
      &:before {
        content: "|";
        margin-right: 30px;
      }
    }

    &:focused,
    &:visited {
      color: ${props => props.theme.colors.default};
    }

    &:hover {
      color: ${props => props.theme.colors.blue};
    }
  }
`

export default () => (
  <Header>
    <Logo src="/img/sa-logo.svg" />

    <Links>
      <Link to="/artworks">Artworks</Link>
      <Link to="/instructions">Instructions</Link>
    </Links>

    <Search />
  </Header>
)
