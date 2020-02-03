import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ImageGalleryItem from './ImageGalleryItem';

const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

function ImageGallery({ listOfImages, onImageClick }) {
  return (
    <List>
      {listOfImages.map(({ id, largeImageURL, webformatURL, tags }) => (
        <ImageGalleryItem
          key={id}
          tags={tags}
          imagesForList={webformatURL}
          largeImageURL={largeImageURL}
          onImageClick={onImageClick}
        ></ImageGalleryItem>
      ))}
    </List>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};

export default ImageGallery;
