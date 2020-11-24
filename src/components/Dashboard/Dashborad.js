import React, {useState} from 'react'
import {Table, Button} from 'react-bootstrap';
import './Dashboard.css'
import BuyModal from "../Buy/BuyModal"
import SellModal from "../Sell/SellModal"
import axios from 'axios';




const Dashboard = () => {

 let arr = [];

 const [comOne, setComOne] = useState("");
 const [comTwo, setComTwo] = useState("");
 const [comThree, setComThree] = useState("");
 const [comFour, setComFour] = useState("");
 const [comFive, setComFive] = useState("");

 const [tickerOne, setTickerOne] = useState("");
 const [tickerTwo, setTickerTwo] = useState("");
 const [tickerThree, setTickerThree] = useState("");
 const [tickerFour, setTickerFour] = useState("");
 const [tickerFive, setTickerFive] = useState("");

 const [valueOne, setValueOne] = useState();
 const [valueTwo, setValueTwo] = useState();
 const [valueThree, setValueThree] = useState();
 const [valueFour, setValueFour] = useState();
 const [valueFive, setValueFive] = useState();

 const [quantityOne, setQuantityOne] = useState();
 const [quantityTwo, setQuantityTwo] = useState();
 const [quantityThree, setQuantityThree] = useState();
 const [quantityFour, setQuantityFour] = useState();
 const [quantityFive, setQuantityFive] = useState();


    const fetchComNames = async () => {
        
        try {
          const response = await axios.get('/api/companies')
        
          for (let i = 0; i<= 4; i++) {
            arr.push(response.data[i])
          }
          
        //   console.log("Received the array")
        //   console.log(arr[0]);

          setComOne(arr[0].name);
          setComTwo(arr[1].name);
          setComThree(arr[2].name);
          setComFour(arr[3].name);
          setComFive(arr[4].name);

          setTickerOne(arr[0].ticker);
          setTickerTwo(arr[1].ticker);
          setTickerThree(arr[2].ticker);
          setTickerFour(arr[3].ticker);
          setTickerFive(arr[4].ticker);

          setValueOne(arr[0].value);
          setValueTwo(arr[1].value);
          setValueThree(arr[2].value);
          setValueFour(arr[3].value);
          setValueFive(arr[4].value);

          setQuantityOne(arr[0].quantity);
          setQuantityTwo(arr[1].quantity);
          setQuantityThree(arr[2].quantity);
          setQuantityFour(arr[3].quantity);
          setQuantityFive(arr[4].quantity);

        } catch(err) {
          console.error(err)
        }
    }
      
    fetchComNames()

    




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
                    <tr>
                    <th>{comOne}</th>
                    <th>{tickerOne}</th>
                    <th>{valueOne}</th>
                    <th>{quantityOne}</th>
                    <th><BuyModal/></th>
                    <th><SellModal/></th>
                    </tr>

                    <tr>
                    <th>{comTwo}</th>
                    <th>{tickerTwo}</th>
                    <th>{valueTwo}</th>
                    <th>{quantityTwo}</th>
                    <th><BuyModal/></th>
                    <th><SellModal/></th>
                    </tr>

                    <tr>
                    <th>{comThree}</th>
                    <th>{tickerThree}</th>
                    <th>{valueThree}</th>
                    <th>{quantityThree}</th>
                    <th><BuyModal/></th>
                    <th><SellModal/></th>
                    </tr>

                    <tr>
                    <th>{comFour}</th>
                    <th>{tickerFour}</th>
                    <th>{valueFour}</th>
                    <th>{quantityFour}</th>
                    <th><BuyModal/></th>
                    <th><SellModal/></th>
                    </tr>

                    <tr>
                    <th>{comFive}</th>
                    <th>{tickerFive}</th>
                    <th>{valueFive}</th>
                    <th>{quantityFive}</th>
                    <th><BuyModal/></th>
                    <th><SellModal/></th>
                    </tr>
                   
                </tbody>
            </Table>
        </>
    )
}

export default Dashboard;



 // setComOne(res.data[0].name)
            // setComTwo(res.data[1].name)
            // setComThree(res.data[2].name)
            // setComFour(res.data[3].name)
            // setComFive(res.data[4].name)