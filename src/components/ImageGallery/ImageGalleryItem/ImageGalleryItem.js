import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListItem = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  animation: fade 1.5s ease-in-out 1 normal forwards;
`;

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

function ImageGalleryItem({
  imagesForList,
  tags,
  largeImageURL,
  onImageClick,
}) {
  return (
    <ListItem>
      <Image
        alt={tags}
        src={imagesForList}
        onClick={() => onImageClick(largeImageURL)}
      ></Image>
    </ListItem>
  );
}

ImageGalleryItem.defaultProps = {
  images:
    'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png',
  tags: '',
};

ImageGalleryItem.propTypes = {
  images: PropTypes.string,
  tags: PropTypes.string,
};

export default ImageGalleryItem;
