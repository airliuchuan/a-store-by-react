import React, { PureComponent } from 'react';
import './index.less';

//搜索框组件
class Search extends PureComponent {
    constructor(...arg) {
        super(...arg);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(this.searchVal)
    }

    render() {
        return (
            <div className="search-wrap">
                <form onSubmit={this.onSubmit}>
                    <input type="text" placeholder="开启你的美食之旅..." ref={(node) => this.searchVal = node }/>
                    <button type="submit"><img src={require('../../img/icon/fdj.png')} alt=""/></button>
                </form>
            </div>
        )
    }
}
export default Search;