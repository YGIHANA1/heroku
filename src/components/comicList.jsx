import React from "react";
import comics from "../data/comics.json";
import {Image} from "react-bootstrap"

class comicList extends React.Component{
constructor(props){
  super(props);
}

 selectNewComic = (comic) => {
    console.log("comic selected", comic);
    this.props.history.push("/details/" + comic.id)
  };
  render(){
  return(
     <div className="container bg-dark">
      
  <h7 className=" font-weight-bolder  fluid" style={{fontSize:"60px",color:"dark" }}lg={12}><a href="/comic">Comics Books</a></h7>
  <div class="row" >
  
    {comics.map((comic, index) =>{
      return<div key={index} className="col-lg-3 col-lg-3 col-lg-3 bg-light">
         

        <h2>{comic.title}</h2><div style={{cursor:"pointer"}}><Image  src={comic.imageUrl} onClick={() => this.selectNewComic(comic)}  /></div></div>
      
    })}
  </div>
  </div>
  )
}};

export default comicList