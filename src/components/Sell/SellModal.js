import React, {useState, setShow} from 'react'
import {Button, Modal, Col, Row} from 'react-bootstrap';
import ButtonSet from "../Sell/ButtonSet"
import Quantity from '../Quantity/Quantity';
import "./SellModal.css"

const SellModal = (props) => {

    //handeling the modal open & close
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const modalType = "sellModal"
   

    return (
       
        <>

            <ButtonSet fName= {handleShow}/> 

                    

            <Modal className="bla" show={show} onHide={handleClose}>

                <Modal.Header closeButton className="smodal-head">
                    <Modal.Title className="smodal-title"><h4>Sell Stocks</h4></Modal.Title>
                </Modal.Header>

                <Modal.Body className="smodal-body">
                    <Quantity qcomValue={props.compValue} qcomName={props.compName} qcomTicker={props.compTicker} qmodaltype={modalType} qmodalQuantity={props.compQuantity}/>
                </Modal.Body>

                <Modal.Footer className="smodal-footer">
                    
                </Modal.Footer>

            </Modal>

            
        </>
  
    )
}

export default SellModal

