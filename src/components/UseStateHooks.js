import React , {useState} from 'react'

const UseStateHooks = () => {
     {/*const [count, setCount] = useState(0)*/}
     
     const initialCount=0
     const [count, setstate] = useState(initialCount)



    return (
        <div>
               {/* <button onClick={()=>setCount(count+1)}>Count {count}</button> */}
                <h1>count:{count}</h1>
               <button onClick={()=>setstate(initialCount)}>Reset</button>
               <button onClick={()=>setstate(prevCount => prevCount + 1)}>Increment</button>
               <button onClick={()=>setstate(prevCount =>prevCount - 1)}>Decrement</button>
        </div>
    )
}

export default UseStateHooks
