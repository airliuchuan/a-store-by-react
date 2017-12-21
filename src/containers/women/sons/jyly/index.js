import React, { PureComponent } from 'react';
import './index.less';

class Jyly extends PureComponent {
    constructor(...arg) {
        super(...arg);
        this.state = {
            name: '',
            number: '',
            suggest: ''
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    changeHandle = (event) => {
        let newData = {};
        newData[event.target.name] = event.target.value;
        this.setState(newData);

    }

    render() {
        const { name, number, suggest } = this.props;
        return (
            <div className="jyly-wrap">
                <form onSubmit={this.onSubmit}>
                    <div className="mz-wrap">
                        <input type="text" value={name} name="name" placeholder="姓名" onChange={this.changeHandle.bind(name)}/>
                    </div>
                    <div className="mz-wrap">
                        <input type="text" value={number} name="number" placeholder="电话" onChange={this.changeHandle.bind(number)}/>
                    </div>
                    <div className="jy-wrap">
                        <textarea value={suggest} name="suggest" placeholder="建议" onChange={this.changeHandle.bind(suggest)}></textarea>
                    </div>
                    <button type="submit" className="btn">提交</button>
                </form>
            </div>
        )
    }
}

export default Jyly;