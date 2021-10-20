import { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'
import './index.styl'
import Taro from '@tarojs/taro'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleBtnClick() {
    Taro.navigateTo({
      url: '/pages/detail/index',
    })
  }

  render () {
    return (
      <View className='index'>
        <Text className="index-title">首页页面</Text>
        <Button
          type="primary"
          className="index-btn"
          onClick={this.handleBtnClick}
        >
          进入详情页
        </Button>
      </View>
    )
  }
}
