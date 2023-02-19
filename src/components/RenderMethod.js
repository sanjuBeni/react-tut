import React, { Component } from "react";

export default class RenderMethod extends Component {
  constructor() {
    super();
    this.state = {
      email: "abc@em.com",
      count: 1,
    };
    console.log("constructor call");
  }
  //   componentDidMount() {
  //     console.log("component did mount method run");
  //   }
  componentDidUpdate() {
    console.log("component did update method run");
  }
  shouldComponentUpdate() {
    console.log("component should update method run");
    // return false;
    return true;
  }
  render() {
    console.log("Render Call");
    return (
      <>
        <h1>{this.state.count}</h1>
        <h2>Render Method {this.state.email}</h2>
        <button
          onClick={() => this.setState({ count: (this.state.count += 1) })}
        >
          Update
        </button>
      </>
    );
  }
}
