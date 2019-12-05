import { Toast } from 'antd-mobile';
import axios from 'axios'
import { ToastCiYun } from './toast';

const BASE_URL = process.env.SERVER_URL_START;
axios.defaults.baseURL = BASE_URL;
axios.defaults.timeout = 30000;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
//axios.defaults.withCredentials = true;
// http request 拦截器
axios.interceptors.request.use((config) => {
  ToastCiYun("loadingOpen");
  return config;
}, (error) => {
  Toast.fail('接口故障,稍后再试！', 3, '', true)
  return Promise.reject(error);
});
//http response 拦截器
axios.interceptors.response.use((res) => {
  ToastCiYun("loadingHide");
  return res;
}, (error) => {
  console.log(error);
  if (error.response) {
    Toast.fail('网络异常，请稍后重试！', 3, '', true)
    // eslint-disable-next-line default-case
    switch (error.response.status) {
      case 500:
        console.log("502处理")
      // eslint-disable-next-line no-fallthrough
      case 404:
        console.log("404处理")
    }
  } else {
    Toast.fail('网络异常，请稍后重试！', 3, '', true)
    return false;
  }
  return Promise.reject(error);
});
export default axios;