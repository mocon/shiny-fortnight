import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import styled from "styled-components"

import * as artworksActions from "../redux/actions/artworks"

import ArtworkItem from "./ArtworkItem"

const Wrapper = styled.div`
  h1 {
    font-size: ${props => props.theme.fontSizes[6]}px;
    font-family: ${props => props.theme.fontFamilySerif};
    font-weight: normal;
  }
  p {
    font-style: italic;
  }
`

const List = styled.div`
  display: flex;
  justify-content: stretch;
  flex-wrap: wrap;

  @media (max-width: 767px) {
    justify-content: space-between;
  }

  @media (max-width: 570px) {
    justify-content: stretch;
  }
`

class ArtworksList extends PureComponent {
  componentWillMount() {
    this.props.artworksActions.fetchStart()
  }

  render() {
    const { items } = this.props

    return (
      <Wrapper>
        <h1>Original Art for Sale</h1>

        <List>
          {
            items &&
            items.map(item => (
              <ArtworkItem
                key={item.artId}
                artist={item.artist}
                artwork_title={item.artwork_title}
                artwork_url={item.artwork_url}
                category={item.category}
                dimensions={item.dimensions}
                image_url={item.image_url}
                product={item.product}
              />
            ))
          }
        </List>
      </Wrapper>
    )
  }
}

ArtworksList.propTypes = {
  artworksActions: PropTypes.object,
  items: PropTypes.array
};

function mapStateToProps(state) {
  return {
    items: state.artworks.items
  }
}

function mapDispatchToProps(dispatch) {
  return {
    artworksActions: bindActionCreators(artworksActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtworksList)
