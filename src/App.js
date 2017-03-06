import React, { Component } from 'react';
import { Link } from 'react-router'
import './App.css';

class App extends React.Component{
    constructor(props){
      super(props);
      this.height = window.innerHeight-44; //height minus border top and bottom
    }
    updateHeight(){
      this.height = window.innerHeight-44;
      this.forceUpdate();
    }
    componentDidMount() {
      this.updateHeight();
      window.addEventListener("resize", this.updateHeight.bind(this));
    }
    componentWillUnMount() {
      window.removeEventListener("resize", this.updateDimensions.bind(this));
    }
    render(){

      return(
        <div>
          <div id="leftContainer">
            <div id="nav">
              <h1 id="name"> Mirza T. Baig</h1>
              <h4 id="cheezyText"> Product Owner By Profession, Urban Dweller, Workout Fanatic, Technology Lover </h4>
              <ul id="navlist">
                <li className="ultest"><Link to="/">About</Link></li>
                <li className="ultest"><Link to="/blog">Blog</Link></li>
                <li ><a href="mailto:mbaig91@gmail.com">Contact</a></li>
              </ul>
            </div>
          </div>
          <div id="rightContainer" style={{height:this.height}}>
            {this.props.children}
          </div>
        </div>
      );
    }
  }

export default App;
