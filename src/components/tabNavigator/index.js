import React, { PureComponent } from 'react';
import { Link,IndexLink } from 'react-router';
import './index.less';
import nav1 from '../../img/icon/nav1.png';
import nav1Selected from '../../img/icon/nav1_selected.png';
import nav2 from '../../img/icon/nav2.png';
import nav2Selected from '../../img/icon/nav2_selected.png';
import nav3 from '../../img/icon/nav3.png';
import nav3Selected from '../../img/icon/nav3_selected.png';
import nav4 from '../../img/icon/nav4.png';
import nav4Selected from '../../img/icon/nav4_selected.png';


class TabNavigator extends PureComponent {

    render() {
        const { pathname } = this.props;
        const diancan = pathname === '/';
        const keshuo = pathname === '/keshuo';
        const women = pathname === '/women';
        const wode = pathname === '/wode';
        return (
            <div>
                <div style={{height: '70px'}}></div>
                <div className="tab-navigator-wrap clear-fix">
                    <IndexLink to="/">
                        <div className="navigator-item">
                            <div className="navigator-item-icon">
                                <img src={ diancan ? nav1Selected : nav1 } alt=""/>
                            </div>
                            <div className="navigator-item-title">

                                <span className={diancan ? "selected" : ""}>点餐</span>
                            </div>
                        </div>
                    </IndexLink>
                    <Link to="/keshuo">
                        <div className="navigator-item">
                            <div className="navigator-item-icon">
                                <img src={ keshuo ? nav2Selected : nav2} alt=""/>
                            </div>
                            <div className="navigator-item-title">
                                <span className={keshuo ? "selected" : ""}>客说</span>
                            </div>
                        </div>
                    </Link>
                    <Link to="women">
                        <div className="navigator-item">
                            <div className="navigator-item-icon">
                                <img src={ women ? nav3Selected : nav3} alt=""/>
                            </div>
                            <div className="navigator-item-title">
                                <span className={women ? "selected" : ""}>我们</span>
                            </div>
                        </div>
                    </Link>
                    <Link to="/wode">
                        <div className="navigator-item">
                            <div className="navigator-item-icon">
                                <img src={wode ? nav4Selected : nav4} alt=""/>
                            </div>
                            <div className="navigator-item-title">
                                <span className={wode ? "selected" : ""}>我的</span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

        )
    }
}

export default TabNavigator;