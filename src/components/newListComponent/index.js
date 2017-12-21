import React, { PureComponent } from 'react';
import { Link } from 'react-router';

import './index.less';

class NewListComponent extends PureComponent {
    render() {
        const { data } = this.props;
        return (
            <div className="newslist-wrap">
                <ul>
                    {
                        data.map((item, index) => {
                            return <li className="" key={index}>
                                <Link>
                                    <div className="newslist-item-wrap">
                                        <div className="newslist-left">
                                            <img src={item.imgSrc} alt=""/>
                                        </div>
                                        <div className="newslist-right">
                                            <div>
                                                <h3>{item.title}</h3>
                                                <p>{item.content}</p>
                                            </div>
                                            <div className="text">
                                                <span>{item.time}</span>
                                                <span>点赞<i className="iconfont icon-dianzan"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        })
                    }
                </ul>
            </div>

        )
    }
}

export default NewListComponent;