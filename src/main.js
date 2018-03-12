import Vue from 'vue';
import App from './App';

Vue.config.productionTip = false;
App.mpType = 'app';

const app = new Vue(App);
app.$mount();

export default {
  // 这个字段走 app.json
  config: {
    pages: [
      'pages/logs/logs',
      'pages/index/index',
      '^pages/add/add',
    ], // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    window: {
      backgroundTextStyle: 'light',
      backgroundColor: '#EA5A49',
      navigationBarBackgroundColor: '#EA5A49',
      backgroundColorBottom: '#ffffff',
      navigationBarTitleText: 'TodoList',
      navigationBarTextStyle: 'light',
    },
    tabBar: {
      selectedColor: '#EA5A49',
      list: [
        {
          pagePath: 'pages/index/index',
          text: '待办事项',
          iconPath: '/static/home.png',
          selectedIconPath: '/static/home-a.png',
        },
        {
          pagePath: 'pages/add/add',
          text: '添加TODO',
          iconPath: '/static/add.png',
          selectedIconPath: '/static/add-a.png',
        },
      ],
    },
  },
};
