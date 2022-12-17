

import React, { Component } from 'react'
import './Front.css';
import Snowfall from "react-snowfall";
import cherry_logo from './pics/cherry_image.png'
import snowLogo from './pics/snow.png'
const snowFlake=document.createElement('img')
snowFlake.src=snowLogo
const images=[snowFlake]

export class Front extends Component {
  render() {
    return (
      <div className='front_page'>
        {/* navbar */}
        <Snowfall
      style={{
        // position:'fixed',
        // width:'100vw',
        height:'100vh'
      }}
      snowflakeCount={80}
      radius={[5,10]}
      speed={[0.5,2]}
      wind={[-0.5,2]}
      // images={images}
      rotationSpeed={[-1,1]}
      />
        <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Cherry
    <img src={cherry_logo} alt="logo" className='cherry_logo'/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">Special Offer</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">F.A.Q.</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

{/* front page */}
<div class="bg">
		<div class="centerer">
			<a href="#" class="button"> Merry   Christmas</a>
		</div>
	</div>
      </div>
    )
  }
}

export default Front
