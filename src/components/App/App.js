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
    if (prevState.search !== this.state.search) {
      const { search, page, per_page } = this.state;
      const baseUrl = "https://pixabay.com/api/?q";
      await axios
        .get(
          `${baseUrl}=${search}&page=${page}&key=${process.env.REACT_APP_KEY}&per_page=${per_page}`
        )
        .then((data) => {
          this.setState({
            articles: data.data.hits,
            loading: false,
          });
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

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmit} />
        {this.state.loading ? (
          <Loader />
        ) : (
          <ImageGallery data={this.state.articles} />
        )}
      </div>
    );
  }
}

export default App;
