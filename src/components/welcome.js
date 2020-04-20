import React, {Component} from 'react'

class Welcome extends Component{
    constructor(){
        super()
        this.state={
            record:'counter',
            count:0

        }
    }

    HandleChange=()=>{
        this.setState({
            count:this.state.count+1
        })

    }

    /*HandleChange(){
        this.setState(prevState=>({
            count:prevState.count+1
        }))
    }*/
    
    render(){
        const {name, address}=this.props
    return (
        <div>
            <h1>{this.state.record}:{this.state.count}</h1>
            <h2>hy {name}</h2>
            <button onClick={this.HandleChange}>change</button>
        </div>
    )
    }
}
export  default Welcome;