import React, { Component } from "react";

export default class Ann extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBtn: 0
    }
  }
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    return (
      <div>首页</div>
    )
  }
}
