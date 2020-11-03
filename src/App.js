import React from 'react';
import "./App.css";
import Navbar from "./components/navbar";
import Message from "./components/message";
import Login from "./components/login";
import Content from "./components/allContents"
import Comics from "./components/comicList"
import ComicDetails from "./components/comicDetails"
import Footer from "./components/footer"
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Post from "./components/postProfile"
function App (){


  return (
    <div className="App">
      <Navbar/>
     
  <Router>
    <Switch>
      <Route path="/login" exact component={Login}/>
      <Route path="/home" component={Content}/>
      <Route path="/comic"  component={Comics}/>
      <Route path="/message" component={Message}/>
      <Route path="/profile/post" component={Post}/>
      <Route path="/details/:id" exact component={ComicDetails} />
       
      </Switch>
  </Router>
 <Footer/>
    </div>
  
  );
  
}
export default App;
