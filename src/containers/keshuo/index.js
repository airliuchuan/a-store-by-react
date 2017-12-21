import React, { PureComponent } from 'react';

// import { KSSwipeArr } from '../../config';
// import { KSNavbarArr } from '../../config';
import TabNavigator from '../../components/tabNavigator';
// import Swipe from '../../components/swipe';
// import NavBar from '../../components/navBar';
import NewsList from './subpage/newsList';

class KeShuo extends PureComponent {

    handleRefresh = (resolve, reject) => {

        const success = true;

        if (success) {
            resolve();
        } else {
            reject();
        }
    }

    render() {
        // console.log(KSNavbarArr)
        return (
            <div>
                <NewsList key="nl"/>
                <TabNavigator key="tabnavigator" pathname={this.props.location.pathname}/>
            </div>
        )
    }

}

export default KeShuo;