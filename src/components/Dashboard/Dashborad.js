import React, {useState, useEffect} from 'react'
import {Table, Button} from 'react-bootstrap';
import './Dashboard.css'
import BuyModal from "../Buy/BuyModal"
import SellModal from "../Sell/SellModal"
import axios from 'axios';



//GET company data
const Dashboard = () => {

  const [comps, setComps] = useState([])

  useEffect(() => {

    axios({
      method: 'GET',
      url: 'http://localhost:4000/api/companies'
    }).then(res => {
      setComps(res.data);
    })

  })



//GET user details
const [user, setUser] = useState([])

useEffect(() => {

  axios({
    method: 'GET',
    url: 'http://localhost:4000/api/users'
  }).then(res => {
    setUser(res.data);
  })

})



//RANDOM number generator
const [rnumber, setRnumber] = useState(0);

const RandomNumber = () => {
  
  useEffect(() => {
    const interval = setInterval(
      () => setRnumber(Math.floor(Math.random() * 100 + 1)),
      5000
    );

    return () => {
      clearInterval(interval);
    };
  }, []);
};

RandomNumber();




let i = 0;


    return (
        <>


            <Table striped bordered hover variant="dark" className="dashboard-table">
                <thead>
                    <tr>
                    <th>Company Name</th>
                    <th>Ticker</th>
                    <th>Trading Value</th>
                    <th>Quantity</th>                
                    </tr>
                </thead>
                
                <tbody>
                   
                    {comps.map(com => (
 
                        <tr>
                          <th>{com.name}</th>
                          <th>{com.ticker}</th>
                          <th>{com.value + rnumber}</th>


                     
                            
                            <th style={{color:"yellow"}}>{user[i]}</th> 
                            


                          <th><BuyModal compName={com.name} compTicker={com.ticker} compValue={com.value + rnumber} compQuantity={user[i]}/></th>
                          <th><SellModal compName={com.name} compTicker={com.ticker} compValue={com.value + rnumber} compQuantity={user[i]}/></th>

                          <th style={{display:"none"}}>{i = i + 1}</th>
                        </tr>

                     
                 
                    ))}

            
                    
                </tbody>
            </Table>
        </>
    )
}

export default Dashboard;