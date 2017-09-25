import * as React from 'react'
import classnames from 'classnames'
import { Loader } from '../../components';
import './Page.less'


interface PageProps {
    loading?: boolean,
    dispatch?,
    children?,
    className?:string,
    inner: boolean
}



export default class Page extends React.Component<PageProps,{}> {
    constructor(props) {
        super(props)
    }
    public render() {
        const { className, children, loading = false, inner = false } = this.props
        let loadingStyle: object;
        loadingStyle = {
            height: 'calc(100vh - 184px)',
            overflow: 'hidden',
        }
        return (
            <div className={classnames(className, { ["contentInner"]: inner, })} style={loading ?  loadingStyle  : null} >
                {loading ? <Loader spinning loaderText="加载中.." /> : ''}
                {children}
            </div>
        )
    }
}
