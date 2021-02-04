import React,{Component} from 'react';
import axios from "axios";
import {loginurl} from '../utils/JWTAuth';
import {Redirect,Link} from 'react-router-dom';

class Login extends Component {
	
	constructor(props) 
	{
		super(props);
		this.state = {redirecturl:false, isLogIn:false, email: '', password: '' };
     }
	
	myChangeHandler = (event) => 
	{
		let nam = event.target.name;
		let val = event.target.value;
		this.setState({[nam]: val});
	}
	
	handleFormSubmit = e => 
	{
        var errr=0;
        var ermsg="";
        
        let email = this.state.email;
        let password = this.state.password;
        
        if (email==="") {
          ermsg+="Please enter email \n";
          errr=1;
        }
        if (password==="") {
          ermsg+="Please enter password \n";
          errr=1;
        }
        
        if(errr===1)
            {
                alert(ermsg);
                return false;
            }
        
		e.preventDefault();


		axios({
		  method: "post",
		  url: loginurl,
		  headers: { "content-type": "application/json" },
		  data: this.state
		})
      .then(response => {
		if(response.data.message==="200")
		{
			console.log(response);
			let jwt = response.data.jwt;
            localStorage.setItem("access_token", jwt);
			this.setState({ isLogIn: true });
			this.setState({ redirecturl: true });
			this.props.setisLogIn(true);
		}
		else if(response.data.message==="408")
		{
			console.log(response);
			alert("Invalid email or password");
		}
		else
		{
			console.log(response);
			alert("Error: somthing went wrong.");
		}
      })
      .catch(response => {
        console.log(response);
      });
		
  };
	
  render()
  {
	  
    if (this.state.redirecturl) 
	{
      return <Redirect to = "/" />;
    }
	  
	  return (
		<div class="container">
		   <div class="row">
	          <div class="col-md-6">
	             <h1>Login</h1>
				 <form>
				  <div class="form-group">
					<label for="email">Email address:</label>
					<input name="email" type="email" class="form-control" placeholder="Enter email" required onChange={this.myChangeHandler}  />
				  </div>
				  <div class="form-group">
					<label for="pwd">Password:</label>
					<input name="password" type="password" class="form-control" placeholder="Enter password" required onChange={this.myChangeHandler} />
				  </div>

				  <button type="submit" class="btn btn-primary" onClick={e => this.handleFormSubmit(e)}>Login</button>
				</form>
                <br/><br/>
		         <p>Are you new user? <Link to="/register">Register</Link></p>

	         </div>
	          <div class="col-md-6">
	               <br />
	               <img src="/images/login.png" alt="about" width="100%"/>
	          </div>
	     </div>
	  </div>
    );
  }	
}

export default Login;
