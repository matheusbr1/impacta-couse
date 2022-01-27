import React from 'react'

import '../../../App.css'

let IntroText = props => {
    return (
        <>
            <div className="border">
                <h1 className="center" >{props.title}</h1>
            </div>
        </>
    )
}

export default IntroText