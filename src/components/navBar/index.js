import React, { PureComponent } from 'react';
import { Link } from 'react-router';
// import PropTypes from 'prop-types';
import './index.less';

//中间导航末班组件
class NavBar extends PureComponent {
    render() {
        const { navBarData } = this.props;
        // console.log(navBarData, 'nabbar')
        return (
            <div className="nabbar-wrap clear-fix">
                {
                    navBarData.length ? navBarData.map((item, index) => {
                                            return <div key={index} className="navbar-item">
                                                <Link>
                                                    <div className="navbar-icon">
                                                        <img src={item.src} alt=""/>
                                                    </div>
                                                    <div className="navbar-title">
                                                        <span>{item.title}</span>
                                                    </div>
                                                </Link>
                                            </div>
                                        })
                                        : <p>加载失败</p>
                }

            </div>
        )
    }
}

//设施默认props限制props数据类型
NavBar.defaultProps = {
    navBarData: []
}
// NavBar.propTypes = {
//     navBarData: PropTypes.array.isRequired
// }

export default NavBar;