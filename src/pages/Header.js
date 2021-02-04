import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
	
	
	handleLogout = () =>
	{
		localStorage.clear();
		this.props.setisLogIn(false);
	}
     
	render()
	{
		let buttons;
		
        if(this.props.isLogIn)
			{
				buttons=(<Link class="nav-link" to="/login" onClick={this.handleLogout}>LOGOUT</Link>)
			}
		    else
			{
				buttons=(<Link class="nav-link" to="/register">LOGIN/REGISTER</Link>)
			}
			
	
	  return (

	  <nav class="navbar navbar-expand-lg navbar-dark bg-site-blue">
	  <Link class="navbar-brand" to="/"><img src="/logo.png" alt="logo" /></Link>
	  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	  </button>

	  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
		<ul class="navbar-nav ml-auto mb-2 mb-lg-0">
			<li class="nav-item">
			  <Link class="nav-link" aria-current="page" to="/">HOME</Link>
			</li>
			<li class="nav-item">
			  <Link class="nav-link" to="/about">ABOUT</Link>
			</li>
			<li class="nav-item dropdown">
			<Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			  SERVICES
			</Link>
			<div class="dropdown-menu" aria-labelledby="navbarDropdown">
			  <Link class="dropdown-item" to="/services/web-design">WEB DESIGN</Link>
			  <Link class="dropdown-item" to="/services/mobile-app">MOBILE APP</Link>

			</div>
			</li>
			<li class="nav-item">
			  <Link class="nav-link" to="/blog">BLOG</Link>
			</li>
			<li class="nav-item">
				{buttons}

			</li>

		  </ul>

	  </div>
	</nav>



	  );
  }
}

export default Header;
