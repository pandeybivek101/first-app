import React from 'react'
import HOCcounter from './HOCcounter'

export const ClickCounter = ({incCount, count}) => {
    return (
        <div>
            <button onClick={incCount}>
                    clicked {count} times
                </button>
        </div>
    )
}


export default HOCcounter(ClickCounter, 5)
