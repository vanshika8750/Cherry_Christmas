

import React, { Component } from 'react'
import './Front.css';
import voice from './audio.mp3'
import sound_img from './pics/audio_image.png'
import Snowfall from "react-snowfall";
import cherry_logo from './pics/cherry_image.png'
import snowLogo from './pics/snow.png'
import{Howl,Howler} from "howler";
const snowFlake=document.createElement('img')
snowFlake.src=snowLogo
const images=[snowFlake]
const audioclips=[{sound:voice,label:'Christmas'}]
export class Front extends Component {
  SoundPlay=(src)=>{
    const sound=new Howl({src})
    sound.play();
  }
  RenderButtonAndSound=()=>{
    return audioclips.map((soundObj,index)=>{
      return(
        <button className='sound_btn' key={index} onClick={()=>this.SoundPlay(soundObj.sound)}>
          <img src={sound_img} alt="audio" style={{width:'50px'}} />
        </button>

      )
    })
  }
  render() {
    Howler.volume(1.0)
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
          <a className="nav-link" aria-current="page" href="#">F.A.Q.</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div className="sound_button">
    {/* insert sound */}
  
  {this.RenderButtonAndSound()}
  <div className='note'>Click above for magical sound</div>
  </div>
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
