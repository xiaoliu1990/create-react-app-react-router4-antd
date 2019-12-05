import React, { Component } from 'react';
import axios from 'common/httpAjax';
import { Slider, WingBlank } from 'antd-mobile';
import store2 from 'store2';

export default class Doctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBtn: 0,
      personId:''
    }
  }
  componentDidMount() {
    console.log(this.props,"doctorProps")
    let personId=store2.session.get('personId');
    this.setState({
      personId:personId
    });
    this.getData();
  }
  handleSubmit(url){
    this.props.history.push(url);
  }
  getData(){
    axios({
      url: '/list',
      data: {
        'personId': this.state.personId,
        'pageNo': 1,
        'pageSize': 10
      },
      method: 'post'
    }).then((res) => {
      // eslint-disable-next-line eqeqeq
      if (res.data.code == 0) {
        console.log(res.data)
      } else {
        console.log('失败')
      }
    });
  }
  log = (name) => {
    return (value) => {
      console.log(`${name}: ${value}`);
    };
  };
  render() {
    return (
      <div className='container'>
        <div className='app-bd'>
          <div className='app-content'>
            <ul>
              <li onClick={()=>{this.handleSubmit("/doctor")}}>医生面板</li>
              <li onClick={()=>{this.handleSubmit("/annual/110")}}>个人面板</li>    
            </ul>
            {this.state.personId}
            <div className='heshun-content'>
              <WingBlank size='lg'>
                <p className='sub-title'>Slider</p>
                <Slider
                  style={{ marginLeft: 30, marginRight: 30 }}
                  defaultValue={26}
                  min={0}
                  max={30}
                  onChange={this.log('change')}
                  onAfterChange={this.log('afterChange')}
                />
              </WingBlank>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
