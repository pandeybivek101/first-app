import React,{useState} from 'react'

const Usestateobject = () => {
    {/*const [name, setstate] = useState({firstname:'', lastname:''})    */}
    const [items, setItems] = useState([])

    const addItem=()=>{
        setItems([...items, {
            id:item.length,
            value:Math.floor(Math.random()*10)+1
        }])
    }
    return (
        <div>
           {/* <form>
                <input type='text' value={name.firstname} onChange={e=>setstate({...name, firstname:e.target.value})}/>
                <input type='text' value={name.lastname} onChange={e=>setstate({...name, lastname:e.target.value})}/>
                <h2>your name is {name.firstname}</h2>
                <h2>your name is {name.lastname}</h2>
            </form>   */}

        <ul>{
            items.map(item=>(
            <li key={item.id}>{item.value}</li>
            ))
            
            }</ul>

        </div>
    )
}

export default Usestateobject
