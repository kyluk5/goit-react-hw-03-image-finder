import React, { Component } from "react";
import axios from "axios";
import Searchbar from "../Searchbar/Searchbar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import Modal from "../Modal/Modal";
import "./App.css";

class App extends Component {
  state = {
    articles: [],
    search: "",
    page: 1,
    per_page: 12,
    loading: false,
    largeImageURL: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.search !== this.state.search ||
      prevState.page !== this.state.page
    ) {
      const { search, page, per_page } = this.state;
      const baseUrl = "https://pixabay.com/api/?q";
      await axios
        .get(
          `${baseUrl}=${search}&page=${page}&key=${process.env.REACT_APP_KEY}&per_page=${per_page}`
        )
        .then((data) => {
          this.setState((prev) => ({
            articles: [...prev.articles, ...data.data.hits],
            loading: false,
          }));
          window.scrollBy({
            top: window.innerHeight,
            behavior: "smooth",
          });
        });
    }
  }

  setLargeImage = (url) => {
    console.dir(url.target.dataset.large);
    this.setState({
      largeImageURL: url.target.dataset.large,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      page: 1,
      articles: [],
      search: e.target[1].value,
      loading: true,
    });
  };

  loadMore = async () => {
    const { page } = this.state;
    await this.setState({
      page: page + 1,
    });

    console.log(this.state.page);
    console.log(this.state.per_page);
  };

  closeModal = () => {
    this.setState({
      largeImageURL: null,
    });
  };

  render() {
    const { articles } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmit} />
        {this.state.loading ? (
          <Loader />
        ) : (
          <ImageGallery
            data={articles}
            loadMore={this.loadMore}
            largeImg={this.setLargeImage}
          />
        )}
        {this.state.largeImageURL && (
          <Modal info={this.state.largeImageURL} closeModal={this.closeModal} />
        )}
      </div>
    );
  }
}

export default App;
