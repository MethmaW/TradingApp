import React from 'react'
import "./Balance.css"
import axios from 'axios';

const Balance = () => {

    let arr = [];

    // const [comOne, setComOne] = useState("");
    // const [comTwo, setComTwo] = useState("");
    // const [comThree, setComThree] = useState("");
    // const [comFour, setComFour] = useState("");
    // const [comFive, setComFive] = useState("");
   
   
       const fetchUsers = async () => {
           
           try {
             const response = await axios.get('/api/users')
           
             for (let i = 0; i<= response.data.length; i++) {
               arr.push(response.data[i])
             }

            console.log(arr[0]);
             
   
           } catch(err) {
             console.error(err)
           }
        }
         
       fetchUsers()


    return (
     <div className="balance-box">
        <h4>Current Balance: USD {100000}</h4>
     </div>
           
       
    )
}

export default Balance
