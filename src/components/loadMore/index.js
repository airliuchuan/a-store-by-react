import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import './index.less';

class LoadMore extends PureComponent {

    componentDidMount () {

        let timeoutId;//做截流,滚一次, 触发一次

        const loadMoreHandle = this.props.loadMoreHandle;

        //获取真实的domwrapper
        const wrapper = this.refs.wrapper;

        function callback () {
            //判断wrapper距离顶部的距离
            const top = wrapper.getBoundingClientRect().top;
            //获取屏幕高度的分辨率
            const windowHeight = window.screen.height - 70;
            //判断条件
            if(top && top < windowHeight) {
                loadMoreHandle();
                // console.log('滚动测试')
            }
        }

        //监听scroll事件
        window.addEventListener('scroll', function() {
            if(this.props.isLoadingMore) {
                return;
            }
            //作截流, 一次滑动值打印一次
            if(timeoutId) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(callback, 50);

        }.bind(this), false)
    }

    clickHandle() {
        this.props.loadMoreHandle()
    }

    render() {
        const { isLoadingMore } = this.props;
        return (
            <div className="load-more" onClick={this.clickHandle.bind(this)} ref="wrapper">
                {
                    isLoadingMore ? <span>正在加载...</span>
                                  : <span>加载更多</span>
                }

            </div>
        )
    }
}
//propsTypes
LoadMore.defaultProps = {
    isLoadingMore: false
};

// LoadMore.propTypes = {
//     isLoadingMore: PropTypes.bool
// };

export default LoadMore;