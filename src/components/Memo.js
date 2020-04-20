import React from 'react'

function Memo({name}) {
    return (
        <div>
            {name}
        </div>
    )
}
export default React.memo(Memo)
