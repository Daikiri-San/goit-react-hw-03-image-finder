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
      const incommingImages = await pixadayApi.fetchArticlesWithQuery(
        searchQuery,
        page,
      );
      this.setState(prevState => ({
        images: [...prevState.images, ...incommingImages.hits],
        page: prevState.page + 1,
      }));
      // console.log(`IMAGES===${images.map(item => item.id)}`);
      // console.log(`SETSET===${[...new Set(images.map(item => item.id))]}`);
      if (images.length === incommingImages.totalHits) {
        this.setState({
          allImagesGotten: true,
        });
      }
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  openModal = ({ target }) => {
    const largeImage = target.dataset.source;
    this.setState({
      modalImage: largeImage,
    });
  };

  closeModal = ({ target }) => {
    if (target.hasAttribute('src')) {
      return;
    }
    return this.setState({
      modalImage: '',
    });
  };

  closeModalOnESC = ({ code }) => {
    if (code !== 'Escape') {
      return;
    }
    return this.setState({
      modalImage: '',
    });
  };

  handleSearchFormSubmit = query => {
    this.setState({
      searchQuery: query,
      allImagesGotten: false,
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
          <ImageGallery openModal={this.openModal} listOfImages={images} />
        )}
        {images.length > 0 && !allImagesGotten && (
          <IntObsInfiniteScroll fetchImages={this.fetchImages} />
        )}
        {modalImage && (
          <Modal
            closeModal={this.closeModal}
            closeModalOnESC={this.closeModalOnESC}
            image={modalImage}
          />
        )}
      </Layout>
    );
  }
}

export default App;
