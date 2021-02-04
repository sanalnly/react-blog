import React,{Component} from 'react';
import axios from "axios";
import {deleteurl} from '../utils/JWTAuth';
import {Redirect} from 'react-router-dom';


class Blogdelete extends Component {
	
	
  constructor(props) 
	{
		super(props);
		this.state = {redirecttologin:false,redirecturl:false, access_token:localStorage.getItem("access_token"),id:this.props.match.params.id};
    }
	
	fetchblog()
	{
		 axios({
		  method: "post",
		  url: deleteurl,
		  headers: { "content-type": "application/json" },
		  data: this.state
		})
      .then(response => {
		if(response.data.message==="200")
		{
            this.setState({ redirecturl: true });
		}
		else if(response.data.message==="201")
		{
			alert("Something went wrong");
			this.setState({ redirecturl: true });
			
		}
		else if(response.data.message==="403")
		{
			this.setState({ redirecttologin: true });
			localStorage.clear();
		}
		else
		{
			alert("Error: somthing went wrong.");
			this.setState({ redirecturl: true });
		}
      })
      .catch(response => {
        console.log(response);
      });
	}
	
	componentDidMount()
	{
		this.fetchblog();
	}
	
		
	render()
	{ 
		
		if (this.state.redirecturl) 
		{
		  return <Redirect to = "/blog" />;
		}	
		if (this.state.redirecttologin) 
		{
		  return <Redirect to = "/login" />;
		}	


			return(null)


	}
}

export default Blogdelete;
