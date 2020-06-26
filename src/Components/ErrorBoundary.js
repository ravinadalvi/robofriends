import React ,{ Component } from 'react';

class ErrorBounday extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError : false 
        }
    }
    componentDidCatch(error,info) {
        this.setState({ hasError:true })
    }

    render() {
        if  (this.state.hasError) {
            return <h1> Ooops.Unable to display</h1>
        }
        return this.props.children
    }
}

export default ErrorBounday;