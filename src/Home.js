import React, { Component } from 'react';

class Home extends React.Component{
	render(){
		return (
			<div id="blogPost">
				<div id="postHeader">
					<h2>About</h2>
				</div>
				<div id="postContent">
					<ul className="socialMedia">
						<li>Present: Product Manager @ <a href="https://dxc.technology">DXC Technology</a></li>
						<li>Location: Los Angeles</li>
						<li><a href="https://www.linkedin.com/in/mbaig91/">LinkedIn</a></li>
						<li><a href="https://twitter.com/toolbaig_talha">Twitter</a></li>
						<li><a href="https://instagram.com/toolbaig">Instagram</a></li>
					</ul>
				</div>
			</div>
		)
	}
}



export default Home;
