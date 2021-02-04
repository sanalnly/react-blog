import React,{Component} from 'react';
import {Link,Redirect} from 'react-router-dom';
import axios from "axios";
import {blogurl} from '../utils/JWTAuth';

class Blog extends Component{
	
  constructor(props) 
	{
		super(props);
		this.state = {redirecttologin:false, access_token:localStorage.getItem("access_token"), blogs : [] };
    }
	
	fetchblogs()
	{
		 axios({
		  method: "post",
		  url: blogurl,
		  headers: { "content-type": "application/json" },
		  data: this.state
		})
      .then(response => {
		if(response.data.message==="200")
		{
			this.setState({blogs:response.data.blog})

		}
		else if(response.data.message==="201")
		{
			this.setState({ redirecturl: true });
		}
		else if(response.data.message==="403")
		{
			this.setState({ redirecttologin: true });
			localStorage.clear();
		}
		else
		{
			alert(response.status+"Error: somthing went wrong.");
		}
      })
      .catch(response => {
        console.log(response);
      });
	}
	
	componentDidMount()
	{
		this.fetchblogs();
	}
	
	
	
  render()
  {	
	  if (this.state.redirecttologin) 
	  {
        return <Redirect to = "/login" />;
	  }
	  
	  
	  let blogss=this.state.blogs.length ? this.state.blogs.map((item) => {
         return (<div class="row">
	          <div class="col-md-12">
	              <h3>{item.title}</h3>
				  <p>{item.contents}</p>
		          <Link to={"/blog/edit/"+item.id}>Edit</Link>  <Link to={"/blog/delete/"+item.id}>Delete</Link>
	          </div>
	     </div>
	       )})
			:"no record found";														 
	
   return (
    <div class="container">
         <div class="row">
	          <div class="col-md-12">
	               <h1>Blog</h1>
	          </div>
	     </div>
	     <br/><br/>
	     <div class="row">
	          <div class="col-md-12">
	               <p><Link to="/blog/new">Add New</Link></p>
	          </div>
	     </div>
	     <br/><br/>
	     {blogss}
	     
	  
    </div>
    );
  }
}

export default Blog;
