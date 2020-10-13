import React from "react"
import {Carousel,Container,Jumbotron,Col,Row} from "react-bootstrap"
import Image from 'react-bootstrap/Image'
import "../App.css"
import W from "../images/BG.gif"
import S from "../images/S.gif"
import J from "../images/JK.gif"
import B from "../images/BG.jpg"
import Su from "../images/Su.jpg"
import Ca from "../images/ca.jpg"
import BL from "../images/Bl.jpg"
import WA from "../images/Wa.jpg"
import BT from "../images/BT.jpg"
import SP from "../images/Sp.gif"
class Content extends React.Component{
    
render(){
    
    return(<div className="container">
      
   
     
      <Jumbotron fluid className="bg-dark">
  <Container>
  <Image src={B} fluid/>
    <h1>Top 10 Comics</h1>
    <p>
      These are the best comics of all the time,scroll down to see the famous marvel.
    </p>
  </Container>
</Jumbotron>
<div className="d-flex justify-content-center bg-dark" thumbnail>
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-400"
      src={W}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Remix</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block h-100"
      src={S}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Superman</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block h-100"
      src={J}
      alt="Third slide"
    fluid/>

    <Carousel.Caption>
      <h3>The Joker</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
    <div>
     <div className="d-flex bg-light">
        <Col ><a href="https://www.cbr.com/superman-clark-kent-best-greatest-dc-comics-storylines-ever/">
        <h2 style={{color:"black"}}>Superman</h2></a>
        <div className="post-thumb d-flex mt-5"> <Image src={Su} thumbnail /><p1>After eight decades, it’s safe to assume that nobody needs a refresher on the Superman origin story (or the name of his mother). So you can imagine the challenge that fell to the filmmakers of Superman: Man of Tomorrow, the latest DC animated film, in finding a new angle to recount the early adventures of a young Clark Kent.

Veteran animator Butch Lukic is no stranger when it comes to Superman, having worked as a storyboard artist and director on various DC animated projects in the last three decades including the seminal Superman: The Animated Series. Recently, he’s been working as a producer for DC’s animated shows and movies, and as producer of Superman: Man of Tomorrow, Lukic gets to provide his take in this back-to-basics approach for the Man of Steel.

</p1></div><hr/>
<div><a href="https://www.cbr.com/captain-america-independence-day-best-comics/"><h2 style={{color:"black"}}>Captain America</h2><Image src={Ca} thumbnail className="bg-light"/></a><p1><br/>
Accidents happen, but it’s not like there’s no precedent for publishers improperly crediting a characters’ creators. For decades DC Comics credited Bob Kane as the sole creator of Batman, ignoring the work that Bill Finger did on the character; they finally updated Batman’s creator credit only within the last few years. Lee himself was also somewhat famous for minimizing the contributions of collaborators like Kirby and Steve Ditko when it came to discussing the origins of some of Marvel’s most popular characters, though later in life he seemed to reverse that behavior.</p1></div>
<hr/>
<div><a href="https://www.marvel.com/articles/comics/14-best-black-panther-stories"><h2 style={{color:"black"}}>Black Panther</h2><Image src={BL} thumbnail className="bg-light"/></a><p1>
Accidents happen, but it’s not like there’s no precedent for publishers improperly crediting a characters’ creators. For decades DC Comics credited Bob Kane as the sole creator of Batman, ignoring the work that Bill Finger did on the character; they finally updated Batman’s creator credit only within the last few years. Lee himself was also somewhat famous for minimizing the contributions of collaborators like Kirby and Steve Ditko when it came to discussing the origins of some of Marvel’s most popular characters, though later in life he seemed to reverse that behavior.</p1></div>
<hr/>
<div><h2 style={{color:"black"}}><a href="https://www.cbr.com/best-daredevil-stories-where-find/">Dare Devil</a></h2><Image src={WA} thumbnail className="bg-light"/><p1><br/>
Accidents happen, but it’s not like there’s no precedent for publishers improperly crediting a characters’ creators. For decades DC Comics credited Bob Kane as the sole creator of Batman, ignoring the work that Bill Finger did on the character; they finally updated Batman’s creator credit only within the last few years. Lee himself was also somewhat famous for minimizing the contributions of collaborators like Kirby and Steve Ditko when it came to discussing the origins of some of Marvel’s most popular characters, though later in life he seemed to reverse that behavior.</p1></div>
<hr/>
<div><a href="https://www.cbr.com/marvel-hulk-stories-underrated/"> <h2 style={{color:"black"}}>Hulk</h2> <Image src={BT} thumbnail className="bg-light"/></a><p1><br/>
Accidents happen, but it’s not like there’s no precedent for publishers improperly crediting a characters’ creators. For decades DC Comics credited Bob Kane as the sole creator of Batman, ignoring the work that Bill Finger did on the character; they finally updated Batman’s creator credit only within the last few years. Lee himself was also somewhat famous for minimizing the contributions of collaborators like Kirby and Steve Ditko when it came to discussing the origins of some of Marvel’s most popular characters, though later in life he seemed to reverse that behavior.</p1></div>
<hr/>
<Jumbotron className="bg-light" xs={4}>
  <Container>
    <Image src={SP} className="bg-dark" lg={5}/>
    <h3>Spider Man</h3>
    <p>
      This is a modified jumbotron that occupies the entire horizontal space of
      its parent.
    </p>
  </Container>
</Jumbotron>

         </Col>
         
</div>
</div>
    </div>

    )}
}


export default Content