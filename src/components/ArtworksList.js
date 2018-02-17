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

const List = styled.div``

class ArtworksList extends PureComponent {
  componentWillMount() {
    this.props.artworksActions.fetchStart()
  }

  render() {
    return (
      <Wrapper>
        <h1>Original Art for Sale</h1>

        <List>
          <p>
            Load Artworks via AJAX, Pull Artworks into Redux Store, and display
            each Artworks data in a 'ArtworkItem' component
          </p>
          {/* <ArtworkItem /> */}
        </List>
      </Wrapper>
    )
  }
}

ArtworksList.propTypes = {
  artworksActions: PropTypes.object
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
