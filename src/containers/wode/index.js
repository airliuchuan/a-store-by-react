import React, { PureComponent } from 'react';
import TabNavigator from '../../components/tabNavigator';
import WoDeList from '../../components/woDeList';

class WoDe extends PureComponent {

    render() {
        return (
            [
                <WoDeList key="wdl"/>,
                <TabNavigator key="tabnavigator" pathname={this.props.location.pathname}/>
            ]

        )
    }

}

export default WoDe;