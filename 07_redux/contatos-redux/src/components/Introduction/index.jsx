import React from 'react'

import IntroText from './IntroText'
import HeaderText from './HeaderText'

import '../../App.css'

const Introduction = props => {
    return (
        <>
            <HeaderText title="Header Text" />
            <IntroText title="Introtext" />
        </>
    )
}

export default Introduction