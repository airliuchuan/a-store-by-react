import React, { PureComponent } from 'react';

import { DCSwipeArr } from '../../config';
import { DCNavbarArr } from '../../config';
import TabNavigator from '../../components/tabNavigator';
import Swipe from '../../components/swipe';
import Search from '../../components/search';
import NavBar from '../../components/navBar';
import GoodsList from './subpage/goodsList';

class DianCan extends PureComponent {

    render() {
        console.log(DCSwipeArr)
        return (
            [
                <Swipe key="swipe" imgSrc={DCSwipeArr}/>,
                <Search key="search"/>,
                <NavBar key="navbar" navBarData={DCNavbarArr}/>,
                <GoodsList key="goodslist"/>,
                <TabNavigator key="tabnavigator" pathname={this.props.location.pathname}/>
            ]


        )
    }

}

export default DianCan;