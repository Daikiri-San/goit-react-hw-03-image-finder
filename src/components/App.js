import React, { Component } from 'react';
import pixadayApi from '../services/pixabayApi';
import Layout from './Layout';
import Notification from './Notification';
import Modal from './Modal';
import IntObsInfiniteScroll from './IntObsInfiniteScroll';
import SearchBar from './SearchBar';
import Spinner from './Spinner';
import ImageGallery from './ImageGallery';
import '../base.css';

class App extends Component {
  state = {
    images: [],
    page: 1,
    searchQuery: '',
    modalImage: '',
    error: null,
    loading: false,
    allImagesGotten: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;

    if (prevQuery !== nextQuery) {
      return this.fetchImages();
    }
  }

  fetchImages = async () => {
    this.setState({
      loading: true,
    });
    const { images, page, searchQuery } = this.state;
    try {
      const incommingImages = await pixadayApi.fetchImagesWithQuery(
        searchQuery,
        page,
      );
      this.setState(prevState => ({
        images: [...prevState.images, ...incommingImages.hits],
        page: prevState.page + 1,
        allImagesGotten: images.length === incommingImages.totalHits,
      }));
      // console.log(`IMAGES===${images.map(item => item.id)}`);
      // console.log(`SETSET===${[...new Set(images.map(item => item.id))]}`);
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  openModalOnSelectImage = largeImage => {
    this.setState({
      modalImage: largeImage,
    });
  };

  closeModal = () => {
    return this.setState({
      modalImage: '',
    });
  };

  handleSearchFormSubmit = query => {
    this.setState({
      searchQuery: query,
      images: [],
      page: 1,
    });
  };

  render() {
    const { allImagesGotten, loading, images, error, modalImage } = this.state;

    return (
      <Layout>
        <SearchBar handleSearchFormSubmit={this.handleSearchFormSubmit} />
        {error && (
          <Notification
            message={`Whoops... something went wrong: ${error.message}`}
          />
        )}
        {loading && <Spinner />}
        {images.length > 0 && (
          <ImageGallery
            onImageClick={this.openModalOnSelectImage}
            listOfImages={images}
          />
        )}
        {images.length > 0 && !allImagesGotten && (
          <IntObsInfiniteScroll fetchImages={this.fetchImages} />
        )}
        {modalImage && (
          <Modal closeModal={this.closeModal}>
            <img src={modalImage} alt="" />
          </Modal>
        )}
      </Layout>
    );
  }
}

export default App;
