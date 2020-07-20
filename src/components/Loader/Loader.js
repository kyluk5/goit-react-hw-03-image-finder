import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import React, { Component } from "react";
import "../Loader/Loader.css";

export default class Spiner extends Component {
  //other logic
  render() {
    return (
      <Loader
        className="loader_js"
        type="ThreeDots"
        color="#00BFFF"
        height={200}
        width={200}
      />
    );
  }
}
