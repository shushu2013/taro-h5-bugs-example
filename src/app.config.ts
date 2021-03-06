
  const tabBar = {
    list: [
      {
        iconPath: 'img/home-normal@2x.png',
        selectedIconPath: 'img/home-active@2x.png',
        pagePath: 'pages/index/index',
        text: '้ฆ้กต',
      },
      {
        iconPath: 'img/my-normal@2x.png',
        selectedIconPath: 'img/my-active@2x.png',
        pagePath: 'pages/mine/index',
        text: 'ๆ็',
      },
    ],
    color: '#999999',
    selectedColor: '#FFBD00',
    backgroundColor: '#fff',
    borderStyle: 'white',
    homePage: 'pages/index/index',
  }

export default {
  pages: [
    'pages/index/index',
    'pages/mine/index',
    'pages/detail/index',
    'pages/test/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar,
}
