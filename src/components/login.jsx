import React from "react"
import {Form,Button} from "react-bootstrap"
import {Redirect} from "react-router-dom"
import "../App.css"
import axios from "axios"

class LoginForm extends React.Component {
constructor(props){
super(props);
this.state= { email: "",
password: "" ,
isLoading:false    
}
this.onSubmit= this.onSubmit.bind(this);
}; 

 componentDidMount =()=>{
  this.login();
 }
 login  (){ 
const data ={email:this.state.email,password:this.state.password}   
axios.post("http://localhost:7000/users/login",data)
.then(res => {localStorage.setItem('token', res.data.token)})
.catch((err) => console.log(err))
 }
 onSubmit (e) {
   e.preventDefault();
const data= {email:this.email,password:this.password}
axios.get("http://localhost:7000/users/login",data)
.then(res=>{localStorage.setItem('token', res.data.token)})
.catch(err=>{console.log(err)})

this.props.history.push("/home/" + this.state.email)
 }
render(){
  const {email ,password , isLoading}=this.state
return(<div className="container">
  <>
<Form className="Form bg-dark mt-2" onSubmit={this.onSubmit}> 
  <Form.Group controlId="formBasicEmail">
    <Form.Label >Username</Form.Label>
    <Form.Control className="Email" type="email" placeholder="Enter email" 
      value={this.state.email} 
     onChange={e=> this.setState({email:e.currentTarget.value})} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label >Password</Form.Label>
    <Form.Control className="Password"  type="password" placeholder="Password" value={this.state.password} onChange={e => this.setState({password:e.currentTarget.value})}/>
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="dark" type="submit"  disabled={isLoading} onClick={()=>this.login()}>
 Login
  </Button>
</Form>
</>
</div>
)
}}
export default  LoginForm