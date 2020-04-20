import React from 'react'

const Renderpropsclick = ({count, incCount}) => {
    return (
        <div>
            <button onClick={incCount}>
                    clicked {count} times
            </button>
        </div>
    )
}

export default Renderpropsclick
