import React, { Component } from "react";

export default class Annual extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBtn: 0
    }
  }
  componentDidMount() {
  }
  render() {
    return (
      <div className="app-heshun">
        <div className="app-bd">
          政治部健康警队建设指导处<br />
          2019年9月23日11
        </div>
      </div>
    )
  }
}
