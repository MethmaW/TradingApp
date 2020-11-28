import React, {useState} from 'react'
import axios from "axios"
import "./Quantity.css"
import {Button, Modal, Row, Col} from 'react-bootstrap';

const Quantity = (props) => {



   
    return (
        <div className="quan">

        

            <form method="POST" action="http://localhost:4000/api/companies">
                
                <input name="type" value={props.qmodaltype} readonly className="modalType"/>
                <input name="existingquan" value={props.qmodalQuantity} readonly className="modalType"/>

           
                <div className="latestValBox">
                    <label>Latest Value: USD &nbsp;</label>
                    <input name="qval" value={props.qcomValue} readonly className="latestVal"/>
                </div>
                


                <Row className="modalRowOne">
                    <Col>

                        <Row>
                            <Col>
                                <label>Company:</label>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <input name="qcom" value={props.qcomName} readonly style={{pointerEvents:"none"}} className="comName"/>
                            </Col>
                        </Row>

                    </Col>

                    <Col>

                        <Row>
                            <Col>
                                <label>Ticker:</label>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <input name="qticker" value={props.qcomTicker} readonly className="comTick"/>
                            </Col>
                        </Row>

                    </Col>               

                </Row>

            
                <Row className="modalRowTwo">
                    <Col>
                        <label>Quantity:</label>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <input type="number" name="quantity" className="comQuan"/>
                    </Col>
                </Row>
                
                <Button  className="bmodalOk smodalOk" type="submit" value="Submit">OK</Button>

            </form>
            
        </div>
    )
}

export default Quantity
