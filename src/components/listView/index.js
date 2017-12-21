import React, { PureComponent } from 'react';
import './index.less';

const XLJZ = '下拉加载';
const SKJZ = '松开加载';
const JZ = '加载中...'
let dropDownRefreshText = XLJZ;
const dragValve = 50; // 下拉加载阀值

/*
* ListView的api:
*   openDragLoading: 是否开启下拉刷新 bool
*   openScrollLoading: 是否开启上拉加载 bool
*   onRefresh: 处理下拉刷新的回调函数 func
*   onLoadMore: 处理下拉加载的回调函数 func
* */

class ListView extends PureComponent {
    constructor(...arg) {
        super(...arg);
        this.state = {
            translate: 0,//位移
            dragLoading: false,//是否正在下拉刷新
            scrollerLoading: false,//是否在加载更多中
            //openDragLoading: true,//是否开启下拉刷新
            //openScrollLoading: false,//是否开启上拉加载更多
            data: []//默认的列表空数据
        }
    }

    componentDidMount() {
        this.setState({
            translate: 0,
            openDragLoading: this.props.openDragLoading,
            openScrollLoading: this.props.openScrollLoading
        });
        this.initRefresh();
        this.initScroll();
    }

    initRefresh = () => {
        let isTouchStart = false;//是否已经触发下拉
        let isDragStart = false;//是否已经开始下拉
        let startX, startY;//下拉放心, touchstart的坐标
        const hasTouch = 'ontouchstart' in window;//判断是否在移动端上

        const touchStart = (event) => {
            // console.log(this.refs.scroller.scrollTop , 'scrolltop')
            if (this.refs.scroller.scrollTop <= 0) {
                isTouchStart = true;
                startY = hasTouch ? event.changedTouches[0].pageY : event.pageY;
                startX = hasTouch ? event.changedTouches[0].pageX : event.pageX;
            }
        }

        const touchMove = (event) => {
            if (!isTouchStart) return;
            let distanceY = (hasTouch ? event.changedTouches[0].pageY : event.pageY) - startY;
            let distanceX = (hasTouch ? event.changedTouches[0].pageX : event.pageX) - startX;
            //如果X方向上的位移大于Y方向，则认为是左右滑动
            if (Math.abs(distanceX) > Math.abs(distanceY))return;
            if (distanceY > 0) {
                this.setState({
                    translate: Math.pow((hasTouch ? event.changedTouches[0].pageY : event.pageY) - startY, 0.85)
                });
            } else {
                if (this.state.translate !== 0) {
                    this.setState({translate: 0});
                    this.transformScroller(0, this.state.translate);
                }
            }

            if (distanceY > 0) {
                event.preventDefault();
                if (!isDragStart) {
                    isDragStart = true;
                }
                if (this.state.translate <= dragValve) {// 下拉中，但还没到刷新阀值
                    if (dropDownRefreshText !== XLJZ)
                        this.refs.dropDownRefreshText.innerHTML = (dropDownRefreshText = XLJZ);
                } else { // 下拉中，已经达到刷新阀值
                    if (dropDownRefreshText !== SKJZ)
                        this.refs.dropDownRefreshText.innerHTML = (dropDownRefreshText = SKJZ);
                }
                this.transformScroller(0, this.state.translate);
            }
        }

        const touchEnd = (event) => {
            isDragStart = false;
            if (!isTouchStart) return;
            isTouchStart = false;
            if (this.state.translate <= dragValve) {
                this.transformScroller(0.3, 0);
            } else {
                this.setState({dragLoading: true});//设置在下拉刷新状态中
                this.transformScroller(0.1, dragValve);
                this.refs.dropDownRefreshText.innerHTML = (dropDownRefreshText = JZ);
                this.props.onRefresh();//触发冲外面传进来的刷新回调函数
            }
        }

        //监听下拉加载, 兼容pc
        if (this.props.openDragLoading) {
            this.refs.scroller.addEventListener('touchstart', touchStart, false);
            this.refs.scroller.addEventListener('touchmove', touchMove, false);
            this.refs.scroller.addEventListener('touchend', touchEnd, false);
            this.refs.scroller.addEventListener('mousedown', touchStart, false);
            this.refs.scroller.addEventListener('mousemove', touchMove, false);
            this.refs.scroller.addEventListener('mouseup', touchEnd, false);
        }
    }

    initScroll = () => {

        const scrolling = () => {
            console.log('scrolling')
            if (this.state.scrollerLoading || !this.refs.loadMore) return;
            // let scrollerscrollHeight = this.refs.scroller.scrollHeight; // 容器滚动总高度
            const windowHeight = window.screen.height;

            const scrollerHeight = this.refs.loadMore.getBoundingClientRect().top + 50;// 容器滚动可见高度
            console.log(windowHeight, scrollerHeight,'loadMore')
            // let scrollerTop = this.refs.scroller.scrollTop;//滚过的高度
            // 达到滚动加载阀值
            // if (scrollerscrollHeight - scrollerHeight - scrollerTop <= scrollValve) {
            if (scrollerHeight && scrollerHeight < windowHeight) {
                this.setState({scrollerLoading: true});
                this.props.onLoadMore();
            }
        }

        // 监听滚动加载

        if (this.props.openScrollLoading) {
            console.log('scroll')
            this.refs.scroller.addEventListener('scroll', scrolling, false);
        }

    }


    /**
     * 利用 transition 和transform  改变位移
     * @param time 时间
     * @param translate  距离
     */
    transformScroller = (time, translate) => {
        this.setState({translate: translate});
        const elStyle = this.refs.scroller.style;
        elStyle.webkitTransition = elStyle.MozTransition = elStyle.transition = 'all ' + time + 's ease-in-out';
        elStyle.webkitTransform = elStyle.MozTransform = elStyle.transform = 'translate3d(0, ' + translate + 'px, 0)';
    }

    /**
     * 下拉刷新完毕
     */
    dragLoadingDone = () => {
        this.setState({dragLoading: false});
        this.transformScroller(0.1, 0);
    }

    /**
     * 滚动加载完毕
     */
    scrollLoadingDone = () => {
        this.setState({scrollerLoading: false});
        this.refs.dropDownRefreshText.innerHTML = (dropDownRefreshText = XLJZ);
    }

    /**
     * 当有新的属性需要更新时。也就是网络数据回来之后
     * @param nextProps
     */
    componentWillReceiveProps = (nextProps) => {

        this.setState({data: nextProps.data,});//把新的数据填进列表
        if (this.state.dragLoading) {//如果之前是下拉刷新状态，恢复
            setTimeout(() => {
                this.dragLoadingDone();
            }, 1000);
        }
        if (this.state.scrollerLoading) {//如果之前是滚动加载状态，恢复
            setTimeout( () => {
                this.scrollLoadingDone();
            }, 1000);
        }
    }

    render () {
            // console.log(this.state.data)
        // const self = this;
        return (
            <div className="scroller" ref="scroller">
                <div className="drop-down-refresh-layer">
                    <p className="drop-down-refresh-text" ref="dropDownRefreshText">下拉加载</p>
                </div>
                <div className="scroller-content">
                    <div className="content">
                        {this.props.children}
                    </div>
                    {
                        this.props.hasMore ? <div ref="loadMore" className="scroll-loading">加载中...</div>
                                           : ''
                    }

                </div>
            </div>
        );
    }

}



ListView.defaultProps = {
    openDragLoading: true,
    openScrollLoading: true
};

export default ListView;