import './App.css';
import Navbar from './components/navbar/Navbar'
import {HashRouter as Router , Switch,Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Products from './components/pages/Products'
import Services from './components/pages/Services'
import Signup from "./components/pages/Signup";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Services"  component={Services}/>
          <Route path="/Signup"  component={Signup}/>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
