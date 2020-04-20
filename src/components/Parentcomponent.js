import React, { Component } from 'react'
import PureComp from './PureComp'
import RegularComponent from './RegularComponent'
import Memo from './Memo'

class Parentcomponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'bivek'
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'bivek'
            })
        }, 2000)
    }
    render() {
        return (
            <div>
                {/*<PureComp name={this.state.name}/>
                <RegularComponent name={this.state.name}/>*/}
                <Memo name={this.state.name}/>
            </div>
        )
    }
}

export default Parentcomponent
