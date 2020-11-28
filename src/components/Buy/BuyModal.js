import React, {useState, setShow, useEffect} from 'react'
import {Button, Modal, Row, Col} from 'react-bootstrap';
import ButtonSet from "../Buy/ButtonSet"

import axios from "axios"
import Quantity from '../Quantity/Quantity';
import "./BuyModal.css"


const BuyModal = (props) => {

    //handeling the modal open & close
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const modalType = "buyModal"


   

    return (
       
        <>
            
            <ButtonSet fName= {handleShow}/> 

        

            <Modal className="bla" show={show} onHide={handleClose}>

                <Modal.Header closeButton className="bmodal-head">
                    <Modal.Title className="bmodal-title"><h4>Buy Stocks</h4></Modal.Title>
                </Modal.Header>

                <Modal.Body className="bmodal-body">
                    <Quantity qcomValue={props.compValue} qcomName={props.compName} qcomTicker={props.compTicker} qmodaltype={modalType} qmodalQuantity={props.compQuantity}/>
                </Modal.Body>

                <Modal.Footer className="bmodal-footer">
                    
                </Modal.Footer>

            </Modal>




           
            
    
            
        </>
  
    )
}



export default BuyModal

