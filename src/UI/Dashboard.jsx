import React, { Component } from 'react'
import './dashboard.css';
import Navbar from './Navbar';
import Slideshow from './Slideshow';
import image1 from '../Image/image1.webp';

export default class Dashboard extends Component {
  render() {
    return (
        <div>
            <div>
            <Navbar/>
            <Slideshow/>
            </div>
            <div class="flex-box">
              <div class="flex-box-one">
                <h1>Information</h1>
                <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles.</p>
              </div>
              <div class="flex-box-two">
                <h1>TITLE HEADING</h1>
                <div style={{ height: '400px'}} class="fakeimg">image</div>
                <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles.</p>
              </div>
              <div class="flex-box-three">
                <h1>About Me</h1>
                <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles.</p>
              </div>
              <div class="flex-box-four">
              <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles.</p>
              </div>
              <div class="flex-box-five">
              <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles.</p>
              </div>
            </div>
    

        </div>
        

       
    )
  }
}
