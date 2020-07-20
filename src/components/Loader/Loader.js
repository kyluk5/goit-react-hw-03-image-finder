import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import React, { Component } from "react";

export default class Spiner extends Component {
  //other logic
  render() {
    return <Loader type="Puff" color="#00BFFF" height={100} width={100} />;
  }
}
