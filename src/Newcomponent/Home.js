import React, { Component } from 'react'
import {connect} from 'react-redux'
import {helloRedux} from '../Services/actions'

class Home extends Component {
    render() {
        return (
            <div>
               Home Component
               <button onClick={this.props.helloRedux}>click</button>
            </div>
        )
    }
}

const mapDispatchToProps=dispatch=>({
    helloRedux:()=>dispatch(helloRedux())
})
const mapStateToProps=state=>{
    {

    }
}
const  HomeCmp = connect( mapStateToProps,
    mapDispatchToProps)(Home)
export default HomeCmp
