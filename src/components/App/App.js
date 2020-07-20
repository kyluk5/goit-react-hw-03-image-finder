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

  componentDidUpdate() {
    const key = "17103477-0bea4fbdc73e03f9367b91fb1";
    const baseUrl = "https://pixabay.com/api/?q";
    axios
      .get(
        `${baseUrl}=${this.state.search}&page=${this.state.page}&key=${key}&per_page=${this.state.per_page}`
      )
      .then((data) => {
        this.setState({
          articles: data.data.hits,
          loading: false,
        });
      });
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.dir(e.target[1].value);
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
