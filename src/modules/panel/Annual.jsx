import React, { Component } from "react";
import store2 from 'store2';

export default class Annual extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBtn: 0,
      personId:''
    }
  }
  //组件渲染之后调用，只调用一次
  componentDidMount() {
    let personId=store2.session.get('personId');
    this.setState({
      personId:personId
    });
  }
  handleSubmit(url){
    this.props.history.push(url);
  }
  render() {
    return (
      <div className="app-heshun">
        {this.state.personId}<br/>
        <li onClick={()=>{this.handleSubmit("/annual/123")}}>个人面板123</li>  
        <li onClick={()=>{this.handleSubmit("/annual/456")}}>个人面板456</li>  
        <li onClick={()=>{this.handleSubmit("/annual/789")}}>个人面板789</li> 
      </div>
    )
  }
}
