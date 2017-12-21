import React, { PureComponent } from 'react';
import './index.less';


class WoDeList extends PureComponent {

    render() {
        return (
            <div className="wode-wrap">
                <div className="wode-header">
                    <div className="wode-ava">
                        <img src={require('../../img/wode/default_photo.png')} alt=""/>
                    </div>
                    <div className="wode-username">
                        <span>1232312312</span>
                    </div>
                </div>
                <div className="wode-list">
                    <ul>
                        <li>
                            <span className="iconfont icon-dingwei"></span>
                            <span>收获地址</span>
                        </li>
                        <li>
                            <span className="iconfont icon-dingdan"></span>
                            <span>我的订单</span>
                        </li>
                        <li>
                            <span className="iconfont icon-0058"></span>
                            <span>购物车</span>
                        </li>
                        <li>
                            <span className="iconfont icon-xitongtongzhi"></span>
                            <span>系统通知</span>
                        </li>
                        <li>
                            <span className="iconfont icon-huiyuanqia-copy"></span>
                            <span>会员卡</span>
                        </li>
                        <li>
                            <span className="iconfont icon-youhuiquan"></span>
                            <span>优惠券</span>
                        </li>
                        <li>
                            <span className="iconfont icon-jifen"></span>
                            <span>积分</span>
                        </li>
                        <li style={{marginTop: '20px'}}>
                            <span className="iconfont icon-lianxiwomen"></span>
                            <span>联系我们</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

}

export default WoDeList;