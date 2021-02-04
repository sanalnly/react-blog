import React,{Component} from 'react';
import axios from "axios";
import {registerurl} from '../utils/JWTAuth';
import {Redirect,Link} from 'react-router-dom';


class Register extends Component {
  

	constructor(props) 
	{
		super(props);
		this.state = {redirecturl:false, first_name: '', last_name: '', email: '', password: '' };
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
        let first_name = this.state.first_name;
        let last_name = this.state.last_name;
        let email = this.state.email;
        let password = this.state.password;
        if (first_name==="") {
          ermsg="Please enter first name \n";
          errr=1;
        }
        if (last_name==="") {
          ermsg+="Please enter last name \n";
          errr=1;
        }
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
		  url: registerurl,
		  headers: { "content-type": "application/json" },
		  data: this.state
		})
       .then(response => {
		if(response.data.message==="200")
		{
			alert("User registration success.");
			this.setState({ redirecturl: true });
		}
		else if(response.data.message==="408")
		{
			alert("Email already exists");
		}
		else
		{
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
      return <Redirect to = "/login" />;
    }	
		
	return (
    <div class="container">
	   <div class="row">
	          <div class="col-md-6">
	             <h1>Register</h1>
				 <form>
				  <div class="form-group">
					<label for="First Name">First Name:</label>
					<input required name="first_name" type="text" class="form-control" placeholder="Enter First Name" onChange={this.myChangeHandler} />
				  </div>
		          <div class="form-group">
					<label for="Last Name">Last Name:</label>
					<input required name="last_name" type="t"ext class="form-control" placeholder="Enter Last Name" onChange={this.myChangeHandler} />
				  </div>
		          <div class="form-group">
					<label for="email">Email address:</label>
					<input required name="email" type="email" class="form-control" placeholder="Enter email" onChange={this.myChangeHandler} />
				  </div>
				  <div class="form-group">
					<label for="pwd">Password:</label>
					<input required name="password" type="password" class="form-control" placeholder="Enter password" onChange={this.myChangeHandler} />
				  </div>

				  <button type="submit" class="btn btn-primary" onClick={e => this.handleFormSubmit(e)}>Register</button>
				</form>
                 <br/><br/>
		         <p>Do you have account already? <Link to="/login">Login</Link></p>
	         </div>
	          <div class="col-md-6">
	               <br />
	               <img src="/images/register.jpg" alt="about" width="100%"/>
	          </div>
	     </div>
	  </div>
     );
  }
}

export default Register;
