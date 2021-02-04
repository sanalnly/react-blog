import React,{Component} from 'react';
import axios from "axios";
import {newurl} from '../utils/JWTAuth';
import {Redirect} from 'react-router-dom';


class Blognew extends Component {
	

	constructor(props) 
	{
		super(props);
		this.state = {redirecttologin:false,redirecturl:false, title: '', contents: '',access_token:localStorage.getItem("access_token") };
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
        let title = this.state.title;
        let contents = this.state.contents;
       
        if (title==="") {
          ermsg="Please enter title \n";
          errr=1;
        }
        if (contents==="") {
          ermsg+="Please enter contents \n";
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
		  url: newurl,
		  headers: { "content-type": "application/json" },
		  data: this.state
		})
       .then(response => {
		if(response.data.message==="200")
		{
			alert("New blog added.");
			this.setState({ redirecturl: true });
		}
		else if(response.data.message==="201")
		{
			alert("Error: somthing went wrong.");
			this.setState({ redirecturl: true });
		}
		else if(response.data.message==="403")
		{
			alert("Access denied.");
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
		
  };
	
	
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

		return (
		<div class="container">
		   <div class="row">
	          <div class="col-md-12">
	             <h1>New Blog</h1>
				 <form>
				  <div class="form-group">
					<label for="Title">Title:</label>
					<input required name="title" type="text" class="form-control" placeholder="Enter Title" onChange={this.myChangeHandler} />
				  </div>
		          <div class="form-group">
					<label for="Content">Content:</label>
					<textarea rows="10" required name="contents" type="text" class="form-control" placeholder="Enter Content" onChange={this.myChangeHandler}></textarea>
				  </div>
		         

				  <button type="submit" class="btn btn-primary" onClick={e => this.handleFormSubmit(e)}>Publish</button>
				</form>
                
	         </div>
	          
	     </div>
	  </div>
    );
  }
}

export default Blognew;
