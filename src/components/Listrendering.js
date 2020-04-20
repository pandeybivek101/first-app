import React, { Component } from 'react'

class Listrendering extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             names:[
                 {id:1,name:'ram'},
                 {id:2,name:'shyam'},
                 {id:3,name:'hari'},
                ]
        }
    }

    render(){
        const namelist=this.state.names.map((m,i)=>(
           <ul>
               <li key={m.i}>{m.name}</li>
           </ul>     
        ))
        return <div>{namelist}</div>
        }
}

export default Listrendering
