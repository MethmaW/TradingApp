import React from 'react'
import {Button} from 'react-bootstrap';


const ButtonSet = (props) => {
    return (
        <Button variant="outline-danger" onClick={props.fName}>
            Sell
        </Button>

        
    )
}

export default ButtonSet
