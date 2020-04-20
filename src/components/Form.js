import React, { Component } from 'react'
import FormInput from './FormInput'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             record:[
                 {name:'ram', age:12},
                 {name:'hari',age:44}
             ]
        }
    }
    
    Addtomain=(data)=>{
        let newrecord=[...this.state.record, data]
        this.setState({
            record:newrecord
        })

    }
    render() {
        return (
            <div>
                <table border="1">
                    <thead><tr><th>Name</th><th>Age</th></tr></thead><tbody>
                    {this.state.record.map(n=>(
                        <tr><td>{n.name}</td><td>{n.age}</td></tr>
                    )
                    )}
                    </tbody>
                </table>
                <FormInput Addtomain={this.Addtomain}/>
              
            </div>
        )
    }
}

export default Form
