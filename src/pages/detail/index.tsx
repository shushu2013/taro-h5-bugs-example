import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.styl'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text className="detail-title">详情页面</Text>
        <a href="https://www.baidu.com">https://www.baidu.com</a>
      </View>
    )
  }
}
