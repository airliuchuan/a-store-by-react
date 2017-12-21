import React, { PureComponent } from 'react';
import ReactSwipe from 'react-swipe';
// import PropTypes from 'prop-types';
import './index.less'

//轮播图模板组件
class Swipe extends PureComponent {

    render() {
        const { imgSrc } = this.props;
        console.log(imgSrc)
        const opt = {
            auto: 2000
        }
        return (
            <div className="swipe-wrap">
                <ReactSwipe className="carousel" swipeOptions={opt}>
                    {
                        imgSrc.length ? imgSrc.map((item, index) => {
                                            return <div key={index} className="carousel-item">
                                                <img src={item} alt=""/>
                                            </div>
                                        })
                                      : <p>加载失败</p>
                    }
                </ReactSwipe>
            </div>

        )
    }
}

//设施默认props限制props数据类型
Swipe.defaultProps = {
    imgSrc: []
}
// Swipe.propTypes = {
//     imgSrc: PropTypes.array.isRequired
// }

export default Swipe;