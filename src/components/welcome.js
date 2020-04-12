import React, {Component} from 'react'

class Welcome extends Component{
    constructor(){
        super()
        this.state={
            record:'this record'
        }
    }
    HandleChange=()=>{
        this.setState({
            record:'clicked'   
        })
    }
    render(){
    return (
        <div>
            <h1>{this.state.record}</h1>
            <button onClick={this.HandleChange}>change</button>
        </div>
    )
    }
}
export  default Welcome;