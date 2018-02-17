import React from "react"
import styled from "styled-components"

const Search = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: ${props => props.theme.border};
`

const SVG = styled.svg`
  height: 7px;
  width: 14px;
  margin: 15px 10px;
`

const Input = styled.input`
  border: none;
  outline: none;
  padding: 10px;
  display: flex;
  flex-grow: 1;
  border-left: ${props => props.theme.border};
  color: ${props => props.theme.colors.gray};
  &::placeholder {
    color: ${props => props.theme.colors.grayDark};
  }
`

const Mag = styled.img`
  margin-right: 10px;
  height: 15px;
  width: 16.4219px;
`

export default props => {
  return (
    <Search>
      <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 8">
        <g fill="none" fillRule="evenodd" stroke="#333" strokeLinecap="square">
          <path d="M1 0l7.071 7.071M8.5 7.5l7-7" />
        </g>
      </SVG>

      <Input type="text" placeholder="Search Artworks" />

      <Mag src="/img/mag-glass.svg" />
    </Search>
  )
}
