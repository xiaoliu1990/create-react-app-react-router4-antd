
const { override, fixBabelImports, addWebpackAlias, addLessLoader, addPostcssPlugins, addWebpackPlugin } = require('customize-cra');
var webpack = require("webpack");
const paths = require('react-scripts/config/paths');
const path = require('path');
paths.appBuild = path.join(path.dirname(paths.appBuild), 'dist'); // 修改打包目录

const ENVIRONMENT = process.env.npm_lifecycle_event;
let serverUrl='';
if ( ENVIRONMENT === "start") {
  serverUrl='//inspection.love-health.com.cn/portal/fastMedical/';
}
if ( ENVIRONMENT === "test") {
  serverUrl='//inspection.love-health.com.cn/portal/fastMedical/';
}
if (ENVIRONMENT === "build") {
  serverUrl='//inspection.ciyun.cn/portal/fastMedical/';
}

module.exports = override(
  //设置按需加载 babel-plugin-import
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
  //设置绝对路径别名
  addWebpackAlias({
    "modules": path.resolve(__dirname, "src/modules"),
    "common": path.resolve(__dirname, "src/common"),
    "components": path.resolve(__dirname, "src/components")
  }),
  //less配置函数
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' }
  }),
  //适配通常采用 rem 布局
  addPostcssPlugins([require('postcss-pxtorem')({
    rootValue: 16,
    propList: ['*']
    // propList: ['*', '!border*', '!font-size*', '!letter-spacing'],
    // propWhiteList: []
  }),]),
  //定义使用环境变量
  addWebpackPlugin(new webpack.DefinePlugin({
    'process.env':{
      'SERVER_URL_START':JSON.stringify(serverUrl),
      'SERVER_URL_TEST':JSON.stringify(serverUrl),
      'SERVER_URL_PRD':JSON.stringify(serverUrl),
    }
  }))
);