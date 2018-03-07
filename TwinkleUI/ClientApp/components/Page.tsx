import * as React from 'react';


export class Page extends React.Component<any, {}>{
    render() {
        return (
            <div style={{ height: '100%' }}>
                {this.props.children}
            </div>
        )

    }
}


export default Page;
