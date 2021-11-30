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

  handleClick = () => {
    Taro.navigateBack()
  }

  render () {
    return (
      <View className='index'>
        <Text className="detail-title">测试页面</Text>
        <Button
          onClick={this.handleClick}
          className="btn"
          type="primary"
        >
          Go Back
        </Button>
      </View>
    )
  }
}
