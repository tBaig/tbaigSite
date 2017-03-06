import React, { Component } from 'react';

class Home extends React.Component{
	render(){
		return (
			<div id="blogPost">
				<div id="postHeader">
					<h2>About</h2>
				</div>
				<div id="postContent">
					<ul>
						<li>Present: Product Owner @ <a href="https://csc.com.com">CSC</a></li>
						<li>Location: Los Angeles</li>
						<li>LinkedIn: linkedin.com/</li>
						<li>Twitter: <a href="https://twitter.com/toolbaig_talha">Twitter</a></li>
						<li>Instagram: <a href="https://instagram.com/toolbaig">Instagram</a></li>
					</ul>
				</div>
			</div>
		)
	}
}



export default Home;