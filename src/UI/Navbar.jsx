import React, { Component } from 'react'
import './dashboard.css';
import image1 from '../Image/Logo.png';

export default class Navbar extends Component {
  render() {
    return (
        <div class="flex-contain">
            <div class="flex-container-one">
            <img
                className="img-fluid"
                style={{ width: '3rem', marginLeft: '10px', marginRight: '10px'}}
                src={image1}
                alt="logo-dashboard"/>
                
            </div>
            <div class="flex-container-two">
            <input class="Search-navbar" type="search" placeholder="Search" aria-label="Search" id='search'/>
            </div>
            <div class="flex-container-three">
            <a id='home' href='#' class='button-navbar' >Home  </a>
            <a id='profile' href='#' class='button-navbar'>Profile  </a>
            <a id='logout' href='#' class='button-navbar'>Logout  </a>
            </div>
                
            </div>

    )
  }
}
