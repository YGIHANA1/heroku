import React from 'react';
import "./App.css";
import Navbar from "./components/navbar";
import Message from "./components/message";
import Login from "./components/login";
import Content from "./components/allContents"
import Comics from "./components/comics"
import Footer from "./components/footer"
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar/>
     
  <Router>
    <Switch>
      <Route path="/" exact component={Login}/>
      <Route path="/home" exact component={Content}/>
      <Route path="/comic" exact component={Comics}/>
      <Route path="/message" component={Message}/>
      </Switch>
  </Router>
 <Footer/>
    </div>
  );
}

export default App;
