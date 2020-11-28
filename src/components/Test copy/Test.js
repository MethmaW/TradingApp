import React, {useState} from 'react'
import axios from "axios"
import "./Test.css"
import {Button, Modal, Row, Col} from 'react-bootstrap';

const Test = () => {





    axios({
        method: 'POST',
        url: 'http://localhost:4000/api/companies',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            quantity: 0
        })
    })
    .then(res => console.log(res))
    .catch(err => console.error(err))

 

    

   
 

   
    return (
        <div className="me">

            <form method="post" action="/api/companies">
            
                <Row>
                    <Col>
                        <label>Quantity:</label>
                    </Col>
                </Row>

                <Row>
                <Col>
                    <input type="text" name="quantity"/>
                    </Col>
                </Row>
                
                <Button variant="success"  className="bmodal-ok" type="submit" value="Submit">OK</Button>
            </form>
            
        </div>
    )
}

export default Test
