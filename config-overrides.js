
const { override, fixBabelImports, addWebpackAlias, addLessLoader, addPostcssPlugins, addWebpackPlugin } = require('customize-cra');
const webpack = require("webpack");
const paths = require('react-scripts/config/paths');
const path = require('path');

// 修改打包目录
paths.appBuild = path.join(path.dirname(paths.appBuild), 'dist'); 
//获取package.json中的scripts启动类型
const ENVIRONMENT = process.env.npm_lifecycle_event;
let serverUrl='';

// eslint-disable-next-line default-case
switch (ENVIRONMENT){
  case "start":
    serverUrl='//devinspection.love-health.com.cn/portal/fastMedical/';//开发测试
  break;
  case "build:dev":
    serverUrl='//inspection.love-health.com.cn/portal/fastMedical/';//测试打包
  break;
  case "build:pro":
    serverUrl='//inspection.ciyun.cn/portal/fastMedical/';//上线打包
  break;
}

module.exports = override(
  //设置按需加载 babel-plugin-import
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: true,
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
    modifyVars: { '@fill-body': '##F5F5F5' }
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
      'SERVER_URL':JSON.stringify(serverUrl),
    }
  }))
);