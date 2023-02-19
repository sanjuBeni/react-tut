import React, { Component } from "react";

class Unmount extends Component {
  constructor() {
    super();
    this.state = { data: "Unmount Component" };
  }
  render() {
    return (
      <div>
        <h2>Unmount Component</h2>
      </div>
    );
  }
}

export default Unmount;
