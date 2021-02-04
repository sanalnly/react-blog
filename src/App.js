import React,{Component} from 'react';
import {BrowserRouter, Route, Switch,Redirect} from 'react-router-dom';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Blognew from './pages/Blognew';
import Blogedit from './pages/Blogedit';
import Blogdelete from './pages/Blogdelete';
import Webdesign from './pages/Webdesign';
import Mobileapps from './pages/Mobileapp';
import Register from './pages/Register';
import Login from './pages/Login';
import Logout from './pages/Logout';
import './App.css';

const PrivateRoute = ({ component, ...rest }) => {
  const isAuthed = localStorage.getItem("access_token");
  return (
    <Route
      {...rest}
      exact
      render={props =>
        isAuthed ? (
          <div>{React.createElement(component, props)}</div>
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};


class App extends Component{
	
  constructor(props) 
  {
    super(props);
    this.state = {redirecturl:false, isLogIn:false };
  }
  
  componentDidMount = () => 
  {
	 
	      const login=localStorage.getItem("access_token");
	  
		  if(login)
			 {
				 this.setisLogIn(true);
			 }
			 else
			 {
			     this.setisLogIn(false);
			 }
		
  }
  
  setisLogIn = isLogIn =>
  {
	  this.setState({ isLogIn: isLogIn });
  };
  
   
  render()
  {
	  
	
	  return (
		<BrowserRouter >   
		<div>
		  <Header isLogIn={this.state.isLogIn} setisLogIn={this.setisLogIn} />
		  <Switch>
			  <PrivateRoute path="/" component={Home} exact />
			  <PrivateRoute path="/about" component={About} exact />
			  <PrivateRoute path="/blog" component={Blog}  exact />
			  <PrivateRoute path="/blog/new" component={Blognew}  exact />
			  <PrivateRoute path="/blog/edit/:id" component={Blogedit}  exact />
			  <PrivateRoute path="/blog/delete/:id" component={Blogdelete}  exact />
			  <PrivateRoute path="/services/web-design" component={Webdesign}  exact />
			  <PrivateRoute path="/services/mobile-app" component={Mobileapps}  exact />
			  <Route path="/register" component={Register}  exact />
			  <Route path="/login" component={() =><Login setisLogIn={this.setisLogIn} />}  exact />
			  <Route path="/logout" component={Logout}  exact />
			  <PrivateRoute path="*" component={Home} exact />
		  </Switch>

		  <Footer />
		</div>
		</BrowserRouter> 
	  );
  }	
}

export default App;
