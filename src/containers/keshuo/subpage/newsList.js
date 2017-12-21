import React, { PureComponent } from 'react';
import { getNewsList } from '../../../fetch/news/';

import './index.less';
import { KSSwipeArr } from '../../../config';
import { KSNavbarArr } from '../../../config';
import NewListComponent from '../../../components/newListComponent';
import Swipe from '../../../components/swipe';
import NavBar from '../../../components/navBar';
// import LoadMore from '../../../components/loadMore';
import  ListView from '../../../components/listView';



class NewList extends PureComponent {
    constructor(...arg) {
        super(...arg);
        this.state = {
            data: [],
            hasMore: false,
            page: 1
        }
        this.resultHandle = this.resultHandle.bind(this);
        this.onLoadMore = this.onLoadMore.bind(this);
    }

    componentDidMount() {
        //加载第一屏
        const result = getNewsList(0);
        this.resultHandle(result);
    }

    //fetch数据处理
    resultHandle(result) {
        result
            .then(res => (
                res.json()
            ))
            .then(data => {
                // console.log(data,data);
                this.setState( state => {
                    return {
                        data: state.data.concat(data.data),
                        hasMore: data.hasMore
                    }
                })

            })
            .catch(e => {
                console.log('getNewList',e);
            })
    }
    //加载更多处理
    onLoadMore() {
        console.log(this.state.page);
        const { page } = this.state;
        const result = getNewsList(page);
        this.resultHandle(result);
        this.setState(state => {
            return {
                page: state.page ++
            }
        })
    }
    //下拉刷新函数
    onRefresh = () => {
        this.setState({page: 0});
        const result = getNewsList(0);
        result.then(res => {
            return res.json();
        })
            .then(data => {
                this.setState({
                    data: data.data
                })
            })
            .catch(e => {
                console.log('refresh getPage', e)
            })
    }

    render() {

        return (
            <ListView  key="lv"
                data={this.state.data}
                onLoadMore={this.onLoadMore}
                onRefresh={this.onRefresh}
                openScrollLoading={true}
                hasMore={this.state.hasMore}>
                <Swipe key="swipe" imgSrc={KSSwipeArr}/>
                <NavBar key="navbar" navBarData={KSNavbarArr}/>
                <div key="nlc-fence" className="nlc-fence">
                    <h3>功效</h3>
                </div>
                <NewListComponent data={this.state.data}/>
            </ListView>
        )
    }
}

export default NewList;