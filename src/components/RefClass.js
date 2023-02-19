import React, { Component, createRef } from "react";

class RefClass extends Component {
  constructor() {
    super();
    this.inputRef = createRef();
  }

  componentDidMount() {
    // console.log((this.inputRef.current.value = 1000));
  }

  getVal() {
    console.log(this.inputRef.current.value);
    this.inputRef.current.style.color = "green";
  }

  render() {
    return (
      <>
        <h2>Ref in React</h2>
        <input type="text" ref={this.inputRef} />
        <br />
        <br />
        <button onClick={() => this.getVal()}>Ref Data</button>
      </>
    );
  }
}

export default RefClass;
