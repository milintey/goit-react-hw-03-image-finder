import { Component } from 'react';
import { GlobalStyle } from '../components/GlobalStyle/GlobalStyle';
import { Searcbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { axiosGet } from './AxiosGetPixabay/AxiosGetPixabay';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';
import { AppDiv } from './App.styled';

export class App extends Component {
  state = {
    images: [],
    page: 1,
    query: '',
    isLoading: false,
    isModalOpen: false,
    modalImage: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.query !== prevState.query ||
      this.state.page !== prevState.page
    ) {
      this.setState({ isLoading: true });

      axiosGet(this.state.query, this.state.page)
        .then(response =>
          this.setState(prev => ({
            images: [...prev.images, ...response],
          }))
        )
        .catch(error => console.log(error))
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  formSubmit = event => {
    event.preventDefault();
    this.setState({
      query: event.currentTarget.elements.query.value,
      page: 1,
      images: [],
    });
    event.currentTarget.reset();
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  toggleModal = image => {
    if (image) {
      this.setState({ isModalOpen: true, modalImage: image });
      return;
    }
    this.setState({ isModalOpen: false, modalImage: '' });
  };

  render() {
    return (
      <AppDiv>
        <Searcbar
          isDisabled={this.state.isLoading}
          formSubmit={this.formSubmit}
        />

        <ImageGallery
          images={this.state.images}
          toggleModal={this.toggleModal}
        />

        {this.state.isLoading && <Loader />}

        {this.state.images.length !== 0 && !this.state.isLoading && (
          <Button
            isDisabled={this.state.isLoading}
            handleLoadMore={this.handleLoadMore}
          />
        )}
        {this.state.isModalOpen && (
          <Modal image={this.state.modalImage} toggleModal={this.toggleModal} />
        )}
        <GlobalStyle />
      </AppDiv>
    );
  }
}
