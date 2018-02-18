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
            items.map(item => {
              return (
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
              )
            })
          }
          {
            (items && search) &&
            itemsMatchingSearch.map(item => {
              return (
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
              )
            })
          }
          {
            (items && itemsMatchingSearchCount === 0) &&
            <p>No Artworks Available, matching "{search}".</p>
          }
        </List>
      </Wrapper>
    )
  }
}

ArtworksList.propTypes = {
  artworksActions: PropTypes.object,
  items: PropTypes.array,
  search: PropTypes.string
};

function mapStateToProps(state) {
  return {
    items: state.artworks.items,
    search: state.artworks.search
  }
}

function mapDispatchToProps(dispatch) {
  return {
    artworksActions: bindActionCreators(artworksActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtworksList)
