import {React , Component} from "react";
import {BrowserRouter , Route,Routes} from "react-router-dom";
import Praimary from "./components/praimary/Praimary";
import Contact from "./components/contact/Contact";
import Nav from "./components/navbar/Nav";
import './App.css';

class App extends Component{
  render(){
    return(
      <div>
        <BrowserRouter>
          <Nav/>
          <Routes>
            <Route path="/" element={<Praimary/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
