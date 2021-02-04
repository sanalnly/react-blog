import React,{Component} from 'react';
import axios from "axios";
import {singleurl,updateurl} from '../utils/JWTAuth';
import {Redirect} from 'react-router-dom';

class Blogedit extends Component {
	
	
  constructor(props) 
	{
		super(props);
		this.state = {redirecttologin:false,redirecturl:false, title: '', contents: '',access_token:localStorage.getItem("access_token"),id:this.props.match.params.id, blogs:[] };
    }
	
	fetchblog()
	{
		 axios({
		  method: "post",
		  url: singleurl,
		  headers: { "content-type": "application/json" },
		  data: this.state
		})
      .then(response => {
		if(response.data.message==="200")
		{
			this.setState({blogs:response.data.blog});
			this.state.blogs.map((item) => {
				this.setState({title:item.title,contents:item.contents})
			})

		}
		else if(response.data.message==="201")
		{
			console.log(response);
			this.setState({ redirecturl: true });
		}
		else if(response.data.message==="403")
		{
			console.log(response);
			this.setState({ redirecttologin: true });
		}
		else
		{
			console.log(response);
			alert(response.status+"Error: somthing went wrong.");
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
		  url: updateurl,
		  headers: { "content-type": "application/json" },
		  data: this.state
		})
      .then(response => {
		if(response.data.message==="200")
		{
			console.log(response);
			alert("blog updated.");
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

		let blogss=this.state.blogs.length ? this.state.blogs.map((item) => {


	      return (<form>
				  <div class="form-group">
					<label for="Title">Title:</label>
					<input defaultValue={item.title} required name="title" type="text" class="form-control" placeholder="Enter Title"  onChange={this.myChangeHandler} />
				  </div>
		          <div class="form-group">
					<label for="Content">Content:</label>
					<textarea defaultValue={item.contents} rows="10" required name="contents" type="text" class="form-control" placeholder="Enter Content" onChange={this.myChangeHandler}></textarea>
				  </div>
		         

				  <button type="submit" class="btn btn-primary" onClick={e => this.handleFormSubmit(e)}>Update</button>
				</form>
	       )})
			:"no record found";		
		
		
		return (
		<div class="container">
		   <div class="row">
				  <div class="col-md-12">
					 <h1>Edit Blog</h1>

					{blogss}
				 </div>

			 </div>
		  </div>
	  );
   }
}

export default Blogedit;
