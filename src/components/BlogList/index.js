import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import BlogItem from './BlogItem'
// import { getBlog } from '../../services'
import { fetchBlogList } from '../../actions/blog'

// 实际上这是一个容器组件
class BlogList extends Component {
  componentDidMount() {
    // getBlog().then(res => {
    //   console.log(res)
    // })
    // console.log('before fetchBlogList')
    this.props.fetchBlogList()
    // console.log('after fetchBlogList')
  }
  // 对传入的数据做检测
  static propTypes = {
    list: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    errMsg: PropTypes.string.isRequired
  }
  render() {
    // console.log(this.props)
    const {
      isLoading,
      list,
      errMsg
    } = this.props

    // 错误信息转化成 布尔值
    let hasError = Boolean(errMsg)

    return (
      isLoading
        ?
        <div>Loading...</div>
        :
        (
          hasError
            ?
            <div>{errMsg}</div>
            :
            <ul>
              {
                list.map(item => {
                  return (
                    <BlogItem key={item.id} {...item} />
                  )
                })
              }
            </ul>
        )
    )
  }
}

const mapState = state => ({
  list: state.blog.list,
  isLoading: state.blog.isLoading,
  errMsg: state.blog.errMsg
})

export default connect(mapState, { fetchBlogList })(BlogList)