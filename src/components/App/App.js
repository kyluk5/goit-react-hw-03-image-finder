import React, { Component } from "react";
import axios from "axios";
import Searchbar from "../Searchbar/Searchbar";
import ImageGallery from "../ImageGallery/ImageGallery";
import "./App.css";

class App extends Component {
  state = {
    articles: [],
    search: "",
    page: 1,
    per_page: 12,
  };

  componentDidMount() {
    const key = "17103477-0bea4fbdc73e03f9367b91fb1";
    const baseUrl = "https://pixabay.com/api/?q";
    axios
      .get(
        `${baseUrl}=${this.state.search}&page=${this.state.page}&key=${key}&per_page=${this.state.per_page}`
      )
      .then((data) => {
        // console.log(data);
        this.setState({
          articles: data.data.hits,
        });
      });
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.dir(e.target[1].value);
    this.setState({
      search: e.target[1].value,
    });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery data={this.state.articles} />
      </div>
    );
  }
}

export default App;
