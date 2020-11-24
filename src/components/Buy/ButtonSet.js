import React from 'react'
import {Button} from 'react-bootstrap';


const ButtonSet = (props) => {
    return (
        <Button variant="outline-success" onClick={props.fName}>
            Buy
        </Button>

        
    )
}

export default ButtonSet
