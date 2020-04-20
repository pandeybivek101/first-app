import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hasError:false
        }
    }
    
    static getDerivedStateFromError(error){
        return{
            hasError:true
        }
    }

    componentDidCatch(error,info){
        console.log(error)
        console.log(info)
    }

    render() {
        const errort=<h1>something went wrong</h1>
        return (
            <div>
               {this.state.hasError ? errort : this.props.children}
            </div>
        )
    }
}

export default ErrorBoundary
