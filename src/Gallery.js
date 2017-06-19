//need to keep track of where the user is in the gallery
//stop when the user hits the end of the gallery
//allow user to go 

import React, { Component } from 'react';
import prontoxubfront from './images/prontoxubfront.png';
import cmdenimfront from './images/cmdenimfront.jpg';
import cmdenimback from './images/cmdenimback.jpg';
import prontoxubback from './images/prontoxubback.jpg';

//once the user clicks a thumbnail, take the image variable for it and replace the main image src with it


const denim = [prontoxubfront, prontoxubback, cmdenimfront, cmdenimback];

class Gallery extends Component {

  constructor(props){
    super(props);
    this.state = {
      images: denim,
      selectImage : denim[0]
    }
  }

    handleClick(selectImage){
      this.setState({
        selectImage
      })
    }


  render() {
    const {images, selectImage} = this.state;
    return (
      <div>
        <div id="mainImage">
          <img src={selectImage} alt="prontoxubfront" height="500px"/>
        </div>
        <div class="thumbnails">
          {images.map((image, index) => (
            <span class="thumbnailImage" key={index} onClick={this.handleClick.bind(this,image)}>
              <img src={image}/>
            </span>
          ))}
        </div>
      </div>
    );
  }
}

export default Gallery;
