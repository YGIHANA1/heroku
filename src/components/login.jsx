import React from "react"
import {Form,Button} from "react-bootstrap"
import "../App.css"
class Login extends React.Component{
constructor(props){
  super(props);
  this.state={
  email: "",
  password:""
}};
  login = async () =>{
    const res = await fetch("http://localhost:5000/users/login", {
      method: "POST",
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body: JSON.stringify({email: this.state.email, password: this.state.password})
    })

    if (res.ok){
       //loggedin eureka!
      //store the token
      const result = await res.json();
      console.log (result);
     
    }
    else{
      //show an error message :)
      res.status(401).send("Not Founded")
    }
  }

render(){
return(
<Form className="Form bg-dark"> 
  <Form.Group controlId="formBasicEmail">
    <Form.Label >Username</Form.Label>
    <Form.Control className="Email" type="email" placeholder="Enter email" 
      value={this.state.email} 
      onChange={e=> this.setState({email: e.currentTarget.value})} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label >Password</Form.Label>
    <Form.Control className="Password" type="password" placeholder="Password" value={this.state.password} onChange={e=> this.setState({password: e.currentTarget.value})}/>
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="dark" type="submit" className="Button" onClick={this.login}>
  <a href="/home">Login</a>
  </Button>
</Form>

)}
}
export default Login