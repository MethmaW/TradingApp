import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from "../Navbar/Navbar"
import Balance from "../Balance/Balance"
import Dashboard from "../Dashboard/Dashborad"
import Test from "../Quantity/Quantity"
import Login from "../Login"
import React, {useState, useEffect} from 'react'
import axios from 'axios';


function App() {


  const [userId, setUserid] = useState("");

  useEffect(() => {

    axios({
      method: 'GET',
      url: 'http://localhost:4000/api/authenticate'
    }).then(res => {
      setUserid(res.data);
      console.log(userId);
    })

  })







  if(userId == "bye"){
    return (
    <div className="App">
      <Navbar/>
      <Balance/>
      <Dashboard/>
    </div>)
   
  } else {
    return (
      <div className="App">
        <h1 style={{color:"red"}}>{userId}</h1>
        <Login />
      </div>
    )
  }

}

export default App;
