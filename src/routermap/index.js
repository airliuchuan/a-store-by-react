import React, { PureComponent } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';


import DianCan from '../containers/diancan';
import KeShuo from '../containers/keshuo';
import WoMen from '../containers/women';
import Dpjs from '../containers/women/sons/dpjs';
import Jyly from '../containers/women/sons/jyly';
import WoDe from '../containers/wode';

import App from '../containers';
import NotFound from '../containers/NotFound';

class RouterMap extends PureComponent {
    render () {
        return (
                <Router history={hashHistory}>
                    <Route path="/" component={App}>
                        <IndexRoute component={DianCan}/>
                        <Route path="keshuo" component={KeShuo}/>
                        <Route path="women" component={WoMen}>
                            <IndexRoute component={Dpjs}/>
                            <Route path="jyly" component={Jyly}/>
                        </Route>
                        <Route path="wode" component={WoDe}/>
                        <Route path="*" component={NotFound}/>
                    </Route>
                </Router>
            )
    }
}


export default RouterMap;