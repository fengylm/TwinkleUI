import * as React from 'react';
import classNames from "classnames";
import './Loader.less'

interface LoaderProps {
    spinning: boolean,
    fullScreen: boolean,
    loaderText: string
};

class Loader extends React.Component<LoaderProps, {}>{
    public render() {
        return (<div className={classNames("loader", {
            ["hidden"]: !this.props.spinning,
            ["fullScreen"]: this.props.fullScreen,
        })}
        >
            <div className="warpper">
                <div className="inner" />
                <div className="text" >{this.props.loaderText}</div>
            </div>
        </div>)
    }
}
export default Loader
