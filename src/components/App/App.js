import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from "../Navbar/Navbar"
import Balance from "../Balance/Balance"
import Dashboard from "../Dashboard/Dashborad"
import Test from "../Test/Test"


function App() {
  return (
    <div className="App">
     <Navbar/>
      <Balance/>
     <Dashboard/>

     <Test/>
    </div>
  );
}

export default App;
