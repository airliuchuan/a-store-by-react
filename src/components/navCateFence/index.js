import React, { PureComponent } from 'react';
import './index.less';

class NavCateFence extends PureComponent {
    render() {
        return (
            <div className="nav-fence-wrap">
                <div className="fence-left">
                    <span className="fence-title">积分菜品</span>
                </div>
                <div className="fence-right">
                    <span className="fence-more">more »</span>
                </div>
            </div>
        )
    }
}

export default NavCateFence;