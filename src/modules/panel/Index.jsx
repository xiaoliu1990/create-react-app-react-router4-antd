import React, { Component } from "react";
import qs from 'query-string';
import store2 from 'store2';

export default class Ann extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBtn: 0
    }
  }
  componentDidMount() {
    store2.session('personId', 'p191111114910002e');
  }
  handleSubmit(url){
    this.props.history.push(url);
    /*this.props.history.push({
      pathname: url,
      state:{
        personId:'p191111114910002e'
      }
    });*/
    //query-string用法 qs.stringify({name: 'jim', age: 22});  // 'age=22&name=jim'
    //this.props.history.push(url+"?"+qs.stringify({personId:'p191111114910002e',name:'刘勇'}));
  }
  render() {
    return (
      <div>
        <ul>
          <li onClick={()=>{this.handleSubmit("/doctor")}}>医生面板</li>  
          <li onClick={()=>{this.handleSubmit("/annual")}}>个人面板</li>  
        </ul>        
      </div>
    )
  }
}
