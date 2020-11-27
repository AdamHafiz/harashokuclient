import React from 'react'
import {Button} from 'react-bootstrap'

const HarashokuButton = ({clr,text}) => {
    
    return (
        <div>
            <Button variant = {clr} > {text} </Button>
        </div>
    )
}

export default HarashokuButton
