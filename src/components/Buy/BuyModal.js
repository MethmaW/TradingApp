import React, {useState, setShow} from 'react'
import {Button, Modal, Row, Col} from 'react-bootstrap';
import ButtonSet from "../Buy/ButtonSet"
import "./BuyModal.css"


const BuyModal = () => {

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
       
        <>
            
            <ButtonSet fName= {handleShow}/> 
            
    
            <Modal className="bla" show={show} onHide={handleClose}>

            <Modal.Header closeButton className="bmodal-head">
                <Modal.Title className="bmodal-title"><h4>Buy Stocks</h4></Modal.Title>
            </Modal.Header>

            <Modal.Body className="bmodal-body">
                <h5>Latest Value: USD {1000}</h5>
                <Row className="bmodal-row-one">
                    <Col>
                        <h6>Company Name:</h6>
                        <p>{"FaceBook"}</p>
                    </Col>
      
                    <Col>
                        <h6>Ticker:</h6>
                        <p>{"FBK"}</p>
                    </Col>
                </Row>

                <Row className="bmodal-row-two">
                    <Col>
                        <h6>Quantity:</h6>
                        <input className="bmodal-input" name="buy-quanity" type="number"></input>
                    </Col>
                </Row>

            </Modal.Body>

            <Modal.Footer className="bmodal-footer">
                <Button variant="success" onClick={handleClose} className="bmodal-ok">
                OK
                </Button>
            </Modal.Footer>

            </Modal>
        </>
  
    )
}



export default BuyModal

