import React, { PureComponent } from 'react';
import {KSSwipeArr} from '../../config'
import TabNavigator from '../../components/tabNavigator';
import Swipe from '../../components/swipe';
import WmTabBar from '../../components/wmTabBar';

class WoMen extends PureComponent {

    render() {
        return (
            [
                <Swipe key="swipe" imgSrc={KSSwipeArr}/>,
                <WmTabBar key="wtb" pathname={this.props.location.pathname}/>,
                <div key="sons">
                    {this.props.children}
                </div>,
                <TabNavigator key="tabnavigator" pathname={this.props.location.pathname}/>
            ]

        )
    }

}

export default WoMen;