import React, { Component } from "react";
import store2 from 'store2';

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBtn: 0,
      id:'',
      personId:''
    }
  }
  //组件渲染之后调用，只调用一次
  componentDidMount() {
    let id=this.props.match.params.id;
    let personId=store2.session.get('personId');
    console.log(this.props,"annualProps");
    this.setState({
      id:id,
      personId:personId
    });
  }
  componentDidUpdate(prevProps,prevState){
    let id=this.props.match.params.id;
    // eslint-disable-next-line eqeqeq
    if(id != prevProps.match.params.id){
      this.setState({
        id:id
      });
    }
  }
  handleSubmit(url){
    this.props.history.push(url);
  }
  render() {
    return (
      <div className="app-heshun">
        <div className="app-bd">
          {this.state.id}<br/>
          {this.state.personId}<br/>
          政治部健康警队建设指导处<br />
          2019年9月23日11
          <ul>
            <li onClick={()=>{this.handleSubmit("/doctor")}}>医生面板</li>
            <li onClick={()=>{this.handleSubmit("/annual/234")}}>个人面板</li>
          </ul> 
        </div>
      </div>
    )
  }
}
