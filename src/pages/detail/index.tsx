import { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'
import './index.styl'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleClick = () => {
    window.open("https://www.baidu.com", "_blank")
  }

  render () {
    return (
      <View className='index'>
        <Text className="detail-title">详情页面</Text>
        <a href="https://www.baidu.com">https://www.baidu.com</a>
        <Button
          onClick={this.handleClick}
          className="btn"
          type="primary"
        >在新窗口打开 baidu.com</Button>
      </View>
    )
  }
}
