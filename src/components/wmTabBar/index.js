import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import './index.less';

class WmTabBar extends PureComponent {

    render() {
        const { pathname } = this.props;
        const dpjs = pathname === '/women';
        const jyly = pathname === '/women/jyly';
        return (
            <div className="wm-tabbar-wrap">
                <div className={ dpjs ? "wm-tabbar-item selected" : "wm-tabbar-item"}>
                    <Link to="/women">
                        <span style={{color: dpjs ? 'red' : ''}}>店铺介绍</span>
                    </Link>
                </div>
                <div className={ jyly ? "wm-tabbar-item selected" : "wm-tabbar-item"}>
                    <Link to="women/jyly">
                        <span style={{color: jyly ? 'red' : ''}}>建议留言</span>
                    </Link>
                </div>
            </div>
        )
    }
}

export default WmTabBar;