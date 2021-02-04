import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';

class Logout extends Component 
{
	
	constructor(props) 
	{
     s.state = {redirecturl:false};
    }
	
		
	logout = () =>
	{
    	localStorage.removeItem("access_token");
	    this.setState({ redirecturl: true });
	};
	
  render()
  {
	  
	  if (this.state.redirecturl) 
	  {
		  return <Redirect to = "/login" />;
	  }

	  return (
		  <div>
			  <button onClick={this.logout}>LogOut</button>
		  </div>
	  );
   }	
}

export default Logout;
