import React, { Component } from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line
export default class StoreTemplate extends Component {
  static propTypes = {
    children: PropTypes.element
  };

  render() {
    return <div>{this.props.children}</div>;
  }
}
