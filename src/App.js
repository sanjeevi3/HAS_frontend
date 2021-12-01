import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './routes';

//this file is root of our project
function App(props) {
  console.log("app.js")
  return (
    <div >
      {/* using browser router */}
      <Router >
        {/* add custom routes by routes component */}
        <Routes />
      </Router>
    </div>

  );
}

export default App;
