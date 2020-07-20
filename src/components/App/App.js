import React, { Component } from "react";
import axios from "axios";
import Searchbar from "../Searchbar/Searchbar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";

import "./App.css";

class App extends Component {
  state = {
    articles: [],
    search: "",
    page: 1,
    per_page: 12,
    loading: false,
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
        });
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
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

  render() {
    const { articles } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmit} />
        {this.state.loading ? (
          <Loader />
        ) : (
          <ImageGallery data={articles} loadMore={this.loadMore} />
        )}
      </div>
    );
  }
}

export default App;
