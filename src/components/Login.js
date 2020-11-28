import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap';
import axios from 'axios'


const Login = () => {

  




    return (
        <div>
            <h1 style={{color:"red"}}>LOGIN</h1>

      

            


                <form method="post" action="http://localhost:4000/api/authenticate">

                    <input type="text"  placeholder="User Name" name="uname"/>
                    <input type="password"  placeholder="Password" name="pass"/>

                    <button type="submit" >Login</button>

                </form>





        </div>
    )
}

export default Login









// const [username, setUsername] = useState("");
// const [userpass, setUserpass] = useState("");  

// handleChangeName = (e)  => {
//     const newValueName = e.target.value
//     setUsername(newValueName)
// }

// handleChangePass = (e)  => {
//     const newValuePass = e.target.value
//     setUserpass(newValuePass)
// }

// const sendUser = () => {

//         axios({
//         method: 'POST',
//         data: {
//             userName: username,
//             password: userpass
//         },
//         withCredentials: true,
//         url: 'http://localhost:4000/api/authenticate'
//         })
//         .then(res => console.log(res))

// }




{/* <input type="text"  placeholder="User Name" onChange={(event) => setUsername(event.target.value)}/>
<input type="password"  placeholder="Password" onChange={(event) => setUserpass(event.target.value)}/>

<button onClick={sendUser}>Login</button> */}

