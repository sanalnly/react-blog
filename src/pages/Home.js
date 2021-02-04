import React from 'react';


function Home() {
  return (
    <div class="container">
	   <div class="row">
	      <div class="col-12">
			 <div id="demo" class="carousel slide" data-ride="carousel">

			  <ul class="carousel-indicators">
				<li data-target="#demo" data-slide-to="0" class="active"></li>
				<li data-target="#demo" data-slide-to="1"></li>
				<li data-target="#demo" data-slide-to="2"></li>
			  </ul>

			  <div class="carousel-inner">
				<div class="carousel-item active">
				  <img src="/images/ban1.png" alt=""/>
				</div>
				<div class="carousel-item">
				  <img src="/images/ban2.jpg" alt=""/>
				</div>
				<div class="carousel-item">
				  <img src="/images/ban3.jpg" alt=""/>
				</div>
			  </div>

			  
              </div>
	        </div>
		</div>
	    <br/><br/><br/>
	    <div class="row">
	      <div class="col-12">
	           <h2><center>Our Service</center></h2>
	      </div>
	    </div>
	    <br/><br/>
	    <div class="row">
	      <div class="col-md-4">
	           <img src="/images/s1.jpg" alt="about" width="100%"/>
	           <br/><br/><h4>Our Service</h4>
	           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p><br/><br/>
	      </div>
	      <div class="col-md-4">
	           <img src="/images/s2.jpg" alt="about" width="100%"/>
	           <br/><br/><h4>Our Service</h4>
	           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p><br/><br/>
	      </div>
	      <div class="col-md-4">
	           <img src="/images/s3.jpg" alt="about" width="100%"/>
	           <br/><br/><h4>Our Service</h4>
	           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p><br/><br/>
	      </div>
	      <div class="col-md-4">
	           <img src="/images/s4.jpg" alt="about" width="100%"/>
	           <br/><br/><h4>Our Service</h4>
	           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p><br/><br/>
	      </div>
	      <div class="col-md-4">
	           <img src="/images/s5.jpg" alt="about" width="100%"/>
	           <br/><br/><h4>Our Service</h4>
	           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p><br/><br/>
	      </div>
	      <div class="col-md-4">
	           <img src="/images/s6.jpg" alt="about" width="100%"/>
	           <br/><br/><h4>Our Service</h4>
	           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p><br/><br/>
	      </div>
	    </div>
    </div>
  );
}

export default Home;
