import React, { PureComponent } from 'react';
import { getGoodsList } from '../../../fetch/goods';

import NavCateFence from '../../../components/navCateFence';
import GoodsListComponent from '../../../components/goodsLIstComponent';

class GoodsList extends PureComponent {

    constructor(...arg) {
        super(...arg);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        //加载首屏
        const fristPage = 0;
        const result = getGoodsList(fristPage);
        this.resultHandle(result);

    }
    //处理fetch的数据
    resultHandle(result) {
        result
            .then(res => (
                res.json()
            ))
            .then(data => {
                console.log(data);
                this.setState({
                    data: data.data
                })
            })
            .catch(e => {
                console.log(e);
            })

    }

    render() {
        const { data } = this.state;
        return [
            <NavCateFence key="ncf"/>,
            <GoodsListComponent key="glc" listData={data}/>
        ]

    }
}

export default GoodsList;