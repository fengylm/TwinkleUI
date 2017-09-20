import * as React from 'react';
import { connect } from 'dva';

class Error extends React.Component<{}, {}>{
    constructor(props) {
        super(props);
    }

    public render() {
        return (
            <div>
               坑人啊,出错啦
            </div>
        );
    }
}
export default connect()(Error);
