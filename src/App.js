
import './App.css';
import Nav from './component/Nav';
import About from './component/About';
import Contact from './component/Contact';
import Home from './component/Home';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
    <Nav/>
    <Switch>
    <Route  path='/' component={Home}></Route>
    <Route  path='/about' component={About}></Route>
    <Route  path='/contact' component={Contact}></Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
