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
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 570px) {
    justify-content: stretch;
  }
`

const Message = styled.p`
  margin-top: 30px;
`

class ArtworksList extends PureComponent {
  componentWillMount() {
    this.props.artworksActions.fetchStart()
  }

  favoriteToggle = (itemId) => {
    this.props.artworksActions.favoriteToggle(itemId)
  }

  renderArtworkItem = (item) => {
    const { favorites } = this.props
    const isFavorite = favorites.includes(item.artId)

    return (
      <ArtworkItem
        key={item.artId}
        artId={item.artId}
        artist={item.artist}
        artwork_title={item.artwork_title}
        artwork_url={item.artwork_url}
        category={item.category}
        dimensions={item.dimensions}
        image_url={item.image_url}
        product={item.product}
        isFavorite={isFavorite}
        favoriteToggle={this.favoriteToggle}
      />
    )
  }

  render() {
    const { items, search } = this.props
    const itemsMatchingSearch = items.filter(({artwork_title}) => {
      const searchLower = search.toLowerCase()
      const titleLower = artwork_title.toLowerCase()

      return (titleLower.includes(searchLower)) ? true : false
    })
    const itemsMatchingSearchCount = itemsMatchingSearch.length

    return (
      <Wrapper>
        <h1>Original Art {(search) ? `(${itemsMatchingSearchCount} piece${(itemsMatchingSearchCount !== 1) ? "s" : ""} matching "${search}")` : null} for Sale</h1>

        <List>
          {
            (!items) &&
            <p>Loading...</p>
          }
          {
            (items && !search) &&
            items.map(item => (
              this.renderArtworkItem(item)
            ))
          }
          {
            (items && search) &&
            itemsMatchingSearch.map(item => (
              this.renderArtworkItem(item)
            ))
          }
          {
            (items && search && itemsMatchingSearchCount === 0) &&
            <Message>No Artworks Available, matching "{search}".</Message>
          }
        </List>
      </Wrapper>
    )
  }
}

ArtworksList.propTypes = {
  artworksActions: PropTypes.object,
  items: PropTypes.array,
  search: PropTypes.string,
  favorites: PropTypes.array
};

function mapStateToProps(state) {
  return {
    items: state.artworks.items,
    search: state.artworks.search,
    favorites: state.artworks.favorites
  }
}

function mapDispatchToProps(dispatch) {
  return {
    artworksActions: bindActionCreators(artworksActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtworksList)
