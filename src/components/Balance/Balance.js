import React, {useState, useEffect} from 'react'
import "./Balance.css"
import axios from 'axios';

const Balance = () => {




//GET user details
const [userBalance, setUserbalance] = useState([])

useEffect(() => {

  axios({
    method: 'GET',
    url: 'http://localhost:4000/api/users/balance'
  }).then(res => {
    setUserbalance(res.data);
  })

})

   


    return (
     <div className="balance-box">
        <h4>Current Balance: USD {userBalance}</h4>
     </div>
           
       
    )
}

export default Balance
