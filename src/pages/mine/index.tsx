import { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'

import './index.styl'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleBtnClick() {
    Taro.navigateTo({
      url: '/pages/test/index',
    })
  }

  render () {
    return (
      <View className='index'>
        <Text className="mine-title">我的页面</Text>
        <Button
          type="primary"
          className="index-btn"
          onClick={this.handleBtnClick}
        >
          进入测试页
        </Button>
      </View>
    )
  }
}
