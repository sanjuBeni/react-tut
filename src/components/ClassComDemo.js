import React, { Component } from "react";
import Unmount from "./Unmount";

class ClassComDemo extends Component {
  constructor() {
    super();
    // this.state = { data: "Sanjay" };
    this.state = { data: 1 };
  }
  changeData() {
    // this.setState({ data: "Sanjay Beniwal" });
    this.setState({ data: (this.state.data += 1) });
  }
  render() {
    return (
      <div>
        <h2>{this.state.data}</h2>
        <h2>{this.props.name}</h2>
        <h2>{this.props.email}</h2>
        <button onClick={() => this.changeData()}>Click</button>
        <Unmount />
      </div>
    );
  }
}

export default ClassComDemo;
