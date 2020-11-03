import React from "react";
import {Image} from "react-bootstrap"
import axios from "axios"

class Comics extends React.Component {
  constructor(props){
  super(props);
  this.state= {
    id:"",
    imageUrl:"",
          Title:"",
          Description:"",
          year:"",
          genre:"",
          changecomic:"",
          Post:[]
         
  }}; 
  componentDidMount = () =>{
    this.getComics();
  }
   
   getComics =  ()=>{    
  
 axios.get("http://localhost:5000/comics")
   .then((response)=>{ 

    const data =  response.data
    console.log(data)
    this.setState({Post:data})
   })
  .catch(()=> {
    alert("error has occured")
  })
    }
    render(){
      return(
    <li
    
      className="border-thick card mt-3"

      style={{ cursor: "pointer" }}
    >
      <div className="media card-body">
        <Image className="book-image"  alt="comic cover" />
        <div>
          <p className="card-title font-weight-bold">{}</p>
         
        </div>
      </div>
    </li>
  )}};

  export default Comics