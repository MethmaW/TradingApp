import React, {useState, setShow} from 'react'
import {Button, Modal, Col, Row} from 'react-bootstrap';
import ButtonSet from "../Sell/ButtonSet"
import "./SellModal.css"

const SellModal = () => {

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
       
        <>
            
            <ButtonSet fName= {handleShow}/> 
            
    
            <Modal className="bla" show={show} onHide={handleClose}>

            <Modal.Header closeButton className="smodal-head">
                <Modal.Title className="smodal-title"><h4>Sell Stocks</h4></Modal.Title>
            </Modal.Header>

            <Modal.Body className="smodal-body">
                <h5>Latest Value: USD {1000}</h5>
                <Row className="smodal-row-one">
                    <Col>
                        <h6>Company Name:</h6>
                        <p>{"FaceBook"}</p>
                    </Col>
      
                    <Col>
                        <h6>Ticker:</h6>
                        <p>{"FBK"}</p>
                    </Col>
                </Row>

                <Row className="smodal-row-two">
                    <Col>
                        <h6>Quantity:</h6>
                        <input className="smodal-input" name="buy-quanity" type="number"></input>
                    </Col>
                </Row>

            </Modal.Body>

            <Modal.Footer className="smodal-footer">
                <Button variant="danger" onClick={handleClose} className="smodal-ok">
                OK
                </Button>
            </Modal.Footer>

            </Modal>
        </>
  
    )
}

export default SellModal

