import React, { PureComponent } from 'react';

class CutApart extends PureComponent {

    render() {
        return (
            <div style={{height: this.props.cutHeight || '10px'}}></div>
        )
    }
}

export default CutApart;