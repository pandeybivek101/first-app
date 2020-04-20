import React, { Component } from 'react'
import axios from 'axios'

class AxiosGet extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[]
        }
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/product/')
        .then(response=>{
            this.setState({
                posts:response.data
            })
            console.log(this.state)
        })
        .catch(error=>{
            console.log(error)
        })
    }


    
    render() {
        const nodata=(<p>No data</p>)
        const {posts}=this.state
        const namelist=posts.map(data=>(
        <div key={data.id}>
            <p>{data.title}</p>
            <button>delete</button>
        </div>
        ))
        return (
            <div>
                {posts.length ? namelist : nodata}
            </div>
        )
    }
}

export default AxiosGet
