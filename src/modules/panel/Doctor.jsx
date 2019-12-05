import React, { Component } from 'react';
import axios from 'common/httpAjax';
import { Slider, WingBlank } from 'antd-mobile';
import store2 from 'store2';

export default class Doctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBtn: 0
    }
  }
  componentDidMount() {
    store2.session('personId', 'p191111114910002e');
    let params = new URLSearchParams(this.props.location.search);
    //console.log(this.props)
    //console.log(params.get('personId'),params.get('id'))
    axios({
      url: '/list',
      data: {
        'personId': store2.session.get('personId'),
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
  handleSubmit(){
    this.props.history.push({
      pathname: '/Annual',
      query:{
        personId:'p191111114910002e'
      },
      state:{
        id:'123'
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
            <button onClick={()=>{this.handleSubmit()}}>点击跳转</button>
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
