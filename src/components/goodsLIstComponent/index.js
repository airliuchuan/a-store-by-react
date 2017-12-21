import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import './index.less';

class GoodsListComponent extends PureComponent {

    render() {
            const { listData } = this.props;
            console.log(listData)
        return (
            <ul className="goodslist-wrap clear-fix">
                {
                    listData.map((item, index) => {
                        return <li key={index} className="goodslist-item">
                            <Link to="/wode">
                                <div className="gallery-item">
                                    <img src={item.imgSrc} alt=""/>
                                    <span className="gallery-title">{item.title}</span>
                                </div>
                                <div className="gallery-desc">
                                    <span className="gallery-price">¥{item.price}</span>
                                    <span className="gallery-gwc iconfont icon-0058"></span>
                                </div>
                            </Link>
                        </li>
                    })
                }
            </ul>
        )
    }
}

export default GoodsListComponent;