import React, { Component } from 'react';
import { Router, withRouter} from 'react-router-dom';
import  { Card,Image, ListGroup, ListGroupItem, Form , Modal, Button, Row, Col, Dropdown, DropdownButton} from 'react-bootstrap';
import { AiOutlineQuestionCircle } from "react-icons/ai";
import Marvel from "../images/BG.gif"
import J from "../images/JK.gif"
import { FaHashtag, FaCamera, FaPhotoVideo, FaPaperPlane, FaShare, FaComment, FaThumbsUp, FaInfo, FaPodcast, FaSquare, FaBookmark, FaNetworkWired } from 'react-icons/fa';
import { text } from '@fortawesome/fontawesome-svg-core';
import S from "../images/S.gif"
import axios from "axios"
import e from 'cors';

class PostsProfile extends Component {
    constructor(props){
        super(props);
    this.state= {
        post: [],
        posts: [],
        postId: null,
        postStatus:[],
        newPost:[{ sendStatus: {
            text:""
        }}],
       
        newsFeed:"",
        likes: 0,
        showModal: false,
        oldPostText: '',
        sendStatus: [
            {text:"",
            image:[{photo:[]}]
             } ],
             files:[]
       
        
        }
    }
    
    handleChange = (event) => {
        this.setState({
            newsFeed: event.currentTarget.value
        });

    }

    saveImg = (event) => {
        let photo = new FormData('photo')
        let files=event.target.files
        photo.append('post',files[0])
        this.setState({
            image:photo
        });
    }
    
    componentDidMount(){
    this.postStatus();
     }
        
   
        sendPost=async (e)=>{
        const newPost = this.state.sendStatus
        newPost.text = e.currentTarget.value
         
        const files=e.target.files;
        let photo = new FormData()
        photo.append('post',files)
        this.setState({
            sendStatus: {
                text: e.currentTarget.value,
               image:photo
            }
        })
        console.log("from post profile: ", newPost)
        const res= await fetch("http:localhost:7000/profile/post",{
            method:"post",
            body:photo
             })
    const file=res.json()
        
             console.log("file",file)
         
        
        }
        componentwillMount=()=>{
        this.sendPost();
        this.saveImg();
           }
        
    postStatus = () =>{
              
       const data={image:this.state.image,text:this.state.text}
           axios.post("http://localhost:7000/profile/post",data)
           .then(res=>this.setState({postStatus: [...this.state.postStatus, {text:this.state.text,image:this.state.image}]}))
           .catch(err=>console.log(err))      
    }
   
   fileSelectedHandler = event=>{
       let photo =new FormData()
       photo.append('post', event.target.files[0])
       this.setState({
           image: photo
       })
       console.log("photo",photo)
   }


  
    
    
    render() {
        console.log("from post profile: ",this.state.sendStatus)
         
         console.log('stat of post', this.state.postStatus)
         console.log("file", this.state.sendPost)
        return (
            
            <div className='container '>
                {this.state.posts.map(p => <div>{JSON.stringify({p:this.state.posts})}</div>)}
                <h5 style={{paddingTop: '80px', textAlign: 'center', paddingBottom: '10px', fontSize:"50px"}} >Comics Post </h5>
                <div className='row'>
                    <div className='col-lg-3 col-md-12 col-sm-12'>
                        <div className='row'>
                            <div className='col-12'>
                                <Card style={{border: '1px solid #DFDFDF'}}>
                                   
                                    <Card.Body className='head-prof' style={{position: 'relative', height: '100px'}}>
                                         
                                    </Card.Body>
                                    <ListGroup className="list-group-flush " style={{fontSize: '12px', fontWeight: '700', paddingTop: '100px', borderTop: '1px solid #66666'}}>
                                        <ListGroupItem style={{lineHeight: '0.5'}}>
                                            <p className='pt-2' style={{lineHeight: '0.1', color: '#666666', display: 'flex', justifyContent: 'space-between'}}>Connections
                                            <small style={{fontWeight: '700', fontSize: '13px', color: '#0073B1'}}>1</small></p>
                                            <p className='pb-2'>Grow your network</p>
                                            <p style={{color: '#666666', display: 'flex', justifyContent: 'space-between'}}>Who viewed your profile
                                            <small style={{fontWeight: '700', fontSize: '13px', color: '#0073B1' }}>1</small></p>
                                        </ListGroupItem>
                                        <ListGroupItem>See all Premium features</ListGroupItem>
                                        <ListGroupItem><FaBookmark className='mr-2'/>Saved items</ListGroupItem>
                                 
                                    </ListGroup>
                                   
                                </Card>
                            </div>
                            <div className='col-12 mt-2'>
                               <Card style={{fontSize: '12px'}}>
                                   <Card.Body>
                        
                                       <p style={{fontWeight: '500'}}>Recent</p>
                                       <ul className='list-unstyled' style={{color: '#666666', fontWeight: '700'}}>
                                           <li><FaNetworkWired /> Premium Comics Book</li>
                                           <li><FaHashtag />  readinglife</li>
                                           <li><FaHashtag />  characterlifestyle</li>
                                           <li><FaHashtag />  learntoread</li>
                                           <li><FaNetworkWired />  learning never stop</li>
                                       </ul>
                                       <p style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: '700', color: '#0073B1' }}>Events <small style={{fontSize: '20px', fontWeight: '500'}}>+</small></p>
                                       <p style={{fontWeight: '700', color: '#0073B1' }}>Followed Hashtags</p>
                                       <ul className='list-unstyled' style={{color: '#666666', fontWeight: '700'}}>
                                           <li><FaHashtag />  Reading Life</li>
                                           <li><FaHashtag />  Post Your Opinion</li>
                                           <li><FaHashtag />  </li>
                                           <li><FaHashtag />  learntochooseright</li>
                                           <li>See all</li>
                                       </ul>

                                   </Card.Body>
                                   <ListGroup className="list-group-flush">
                                        <ListGroupItem style={{textAlign: 'center', fontWeight: '700'}}>
                                            Discover more
                                        </ListGroupItem>
                                   </ListGroup>
                               </Card>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-6 col-md-12 col-sm-12 marg-top'>
                    <div className='row'>
                            <div className='col-md-12'>
                                <Card>
                                    <Card.Body style={{display: 'flex', justifyContent: 'space-between'}}>
                                        <textarea style={{flex: '0.8', border: 'none'}} 
                                        placeholder="Start a post"
                                        
                                        onClick={this.sendPost}
                                        type="text"
                                        onChange={e =>this.setState({text:e.currentTarget.value})}
                                      ></textarea>
                                      <faKey style={{color: '#000'}}/>
                                        <div>
                                            <button style={{background: 'transparent'}} className='btn-upload'><div className="image-upload" style={{cursor:'pointer'}}>
                                                <label for="file-input">
                                                <FaCamera style={{width:'20px'}}/>
                                                </label>

                                                <input id="file-input" type="file" onChange={this.fileSelectedHandler} style={{display:'none'}}/>
                                            </div>  
                                            </button>
                                            <button style={{background: 'transparent'}} className='btn-upload ml-5 left-border'><FaPhotoVideo  />
                                              
                                            </button>
                                            <button style={{background: 'transparent'}} className='btn-upload ml-5 left-border' onClick={()=>this.postStatus()}><FaPaperPlane/></button>
                                        </div>

                                    </Card.Body>
                                    <Card.Footer>
                                        <small style={{color: 'rgb(0, 115, 177)', fontSize: '15px', fontWeight: '700'}}>Write an article</small> <small>on MRX</small>
                                    </Card.Footer>
                                   
                                </Card>
                                {this.state.postStatus.length > 0 && this.state.postStatus.map((elem,i) => <Card Key={i}>
                                    <img src={elem.image}/>
                                    <Card.Body>
                                        <p style={{color:'black',fontFamily:"sans-serif"}}>{elem.text}</p>
                                    </Card.Body>
                                </Card>)}
                            </div>
                            
                        </div>
                       
                    </div>
                    <div className='col-lg-3 col-md-12 col-sm-12 btn-trans'>
                    <div className='row'>
                            <div className='col-lg-12 col-md-6 col-sm-12 top-marg'>
                        <Card>
                                    <Card.Body>
                                    <p style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>Add to you feed <AiOutlineQuestionCircle/></p>
                                        <div className='row'>
                                            <div className='col-8' style={{display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                                                <img style={{width: '40px'}} src={Marvel}/>
                                                <h6 className='ml-1' style={{fontSize: '12px'}}>The MRX Times</h6>
                                        
                                            </div>
                                            <div className='col-4'>
                                              <button style={{border: '1px solid rgb(0, 115, 177)', borderRadius: '2px', color: 'rgb(0, 115, 177)'}}>Follow</button>  
                                            </div>
                                        </div>
                                        <div className='row pt-3'>
                                            <div className='col-8' style={{display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                                                <img style={{width: '40px'}} src={Marvel}/>
                                                <h6 className='ml-1' style={{fontSize: '12px'}}>The MRX Times</h6>
                                        
                                            </div>
                                            <div className='col-4'>
                                              <button style={{border: '1px solid rgb(0, 115, 177)', borderRadius: '2px', color: 'rgb(0, 115, 177)'}}>Follow</button>  
                                            </div>
                                        </div>
                                        <div className='row pt-3'>
                                            <div className='col-8' style={{display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                                                <img style={{width: '40px'}} src={Marvel}/>
                                                <h6 className='ml-1' style={{fontSize: '12px'}}>The MRX Times</h6>
                                        
                                            </div>
                                            <div className='col-4'>
                                              <button style={{border: '1px solid rgb(0, 115, 177)', borderRadius: '2px', color: 'rgb(0, 115, 177)'}}>Follow</button>  
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-12 pt-3'> <small style={{color: 'rgb(0, 115, 177)', fontWeight: '700'}}>View all recommndations</small></div>
                                        </div> 
                                    </Card.Body>
                                    
                                </Card>
                            </div>
                            <div className='col-lg-12 mt-3 col-md-6 col-sm-12'>
                             
                                                                
                                        <Card>
                                    <Card.Body>
                                        <p style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>Learning <AiOutlineQuestionCircle/></p>
                                        <p style={{fontSize: '12px', marginTop: '-15px'}}>Advance Your Career</p>
                                        <div className='row pb-3'>
                                            <div className='col-8' style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                                <img style={{width: '50px'}} src={J}/>
                                                <h6  style={{fontSize: '12px'}}>Joke</h6>
                                        
                                            </div>
                                           
                                        </div>
                                        <div className='row pb-3'>
                                            <div className='col-8' style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                              <img style={{width: '50px'}}  src={Marvel}/>
                                                <h6 style={{fontSize: '12px'}}>Marvel</h6>
                                        
                                            </div>
                                           
                                        </div>
                                        <div className='row pb-3'>
                                            <div className='col-8' style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                            <img style={{width: '50px'}}  src={S}/>
                                          
                                                <h6 style={{fontSize: '12px'}}>Superman</h6>
                                        
                                            </div>
                                           
                                        </div>
                                       
                                       
                                      
                                    </Card.Body>
                                    
                                </Card>
                                  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default withRouter(PostsProfile);