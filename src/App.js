import logo from './logo.svg';
import './App.css';
import LogIn from './pages/LogIn';
import { Switch,BrowserRouter as Router,Route, Redirect } from "react-router-dom";
import Register from './pages/Register';
import { connect } from 'react-redux';
import Routes from './routes';

function App(props) {
  console.log("app.js re-render")
  return (
    <div >
       <Router >
    
      
    
     <Routes />
  
   
 </Router>
    </div>
   
  );
}
const mapStateToProps=state=>{
  return{
    
  }
}
export default connect(mapStateToProps)(App);
