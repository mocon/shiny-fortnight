import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Artwork = styled.div`
  display: flex;
  flex: 1;
  min-width: 26%;
  max-width: calc(33.3333% - 20px);
  flex-direction: column;
  background: ${props => props.theme.colors.white};
  border: ${props => props.theme.space[2]}px;
  padding: ${props => props.theme.space[3]}px;
  margin-bottom: 30px;

  &:nth-child(3n + 2) {
    margin-left: 30px;
    margin-right: 30px;
  }

  @media (max-width: 767px) {
    min-width: 40%;
    max-width: calc(50% - 15px);

    &:nth-child(3n + 2) {
      margin: 0 0 30px;
    }

    &:nth-child(even) {
      margin-left: 30px;
    }
  }

  @media (max-width: 570px) {
    display: block;
    min-width: calc(100% - 30px);
    max-width: calc(100% - 30px);

    &:nth-child(even) {
      margin-left: 0;
    }
  }

  img {
    display: block;
    width: 100%;
  }
`

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
`

const Favicon = styled.span`
  position: absolute;
  top: 20px;
  right: 20px;
  background: ${props => props.theme.colors.white};
  border-radius: 50%;
  width: 37px;
  height: 37px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props =>
    props.liked ? props.theme.colors.red : props.theme.colors.secondary};

  transition: 0.3s ease-in color;
  cursor: pointer;
  &.fa {
    display: flex;
  }
  &:hover {
    color: ${props =>
    props.liked ? props.theme.colors.secondary : props.theme.colors.red};
  }
`

const Info = styled.div`
  margin-top: ${props => props.theme.space[2]}px;
`

const Title = styled.div`
  font-family: ${props => props.theme.fontFamilySerif};
  font-size: ${props => props.theme.fontSizes[3]}px;
  font-weight: bold;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-bottom: ${props => props.theme.space[1]}px;

  a {
    text-decoration: none;
    display: inline-block;
    color: ${props => props.theme.colors.default};
    transition: 0.5s ease color;
    cursor: pointer;

    &:hover {
      color: ${props => props.theme.colors.blue};
    }
  }
`

const SubText = styled.div`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: ${props => props.theme.colors.lightGray};
  margin-bottom: ${props => props.theme.space[3]}px;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  ${props => props.right && "align-items: flex-end;"};
`

const ArtworkItem = props => {
  const {
    artId,
    artist,
    artwork_title,
    artwork_url,
    category,
    dimensions,
    image_url,
    product,
    favoriteToggle,
    isFavorite
  } = props
  return (
    <Artwork>
      <ImageWrapper>
        <img src={image_url} alt={artwork_title} />
        <Favicon
          className="fa fa-heart"
          liked={isFavorite}
          onClick={() => {favoriteToggle(artId)}}
        />
      </ImageWrapper>
      <Info>
        <Title>
          <a href={artwork_url}>{artwork_title}</a>
        </Title>

        <SubText>
          {category}, {dimensions.width}W x {dimensions.height}H x{" "}
          {dimensions.depth}cm
        </SubText>

        <Row>
          <Column>
            <Title>
              <a href={artist.profile_url}>
                {artist.first_name} {artist.last_name}
              </a>
            </Title>
            <SubText>{artist.country}</SubText>
          </Column>

          <Column right>
            {product.original_status === "avail" && (
              <Title>${(product.original_price / 100).toLocaleString()}</Title>
            )}
            <div>
              {product.prints_available && (
                <span>
                  Prints from ${product.prints_price.toLocaleString()}
                </span>
              )}
            </div>
          </Column>
        </Row>
      </Info>
    </Artwork>
  )
}

ArtworkItem.propTypes = {
  artId: PropTypes.number,
  artist: PropTypes.object,
  artwork_title: PropTypes.string,
  artwork_url: PropTypes.string,
  category: PropTypes.string,
  dimensions: PropTypes.object,
  image_url: PropTypes.string,
  product: PropTypes.object,
  favoriteToggle: PropTypes.func,
  isFavorite: PropTypes.bool
}

export default ArtworkItem
