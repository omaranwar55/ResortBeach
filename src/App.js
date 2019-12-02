import React ,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Components/NavBar'
import {BrowserRouter ,Route , Switch} from 'react-router-dom';
import Home from './Pages/Home';
import Rooms from './Pages/Rooms';
import SingleRoom from './Pages/SingleRoom';
import Error from './Pages/Error';
class App extends Component {
  render(){
  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/Rooms/" component={Rooms}/>
      <Route exact path="/rooms/:slug" component={SingleRoom}/>
      <Route component={Error}/>
      </Switch>
    </BrowserRouter>
  );
  }
}

export default App;
