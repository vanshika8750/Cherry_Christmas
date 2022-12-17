import React, { Component } from 'react'
import './Contact.css'
export class Contact extends Component {
  render() {
    return (
      <div className='ContactUs'>
        <div className="heading_contact">
            Contact Us
        </div>
        <div className="info">
        <input type="text" name="firstname" id="firstname" placeholder='First Name'className='boxx' style={{width:'48%' ,color:'white'}}/>
        <input type="text" name="lastname" id="lastname" placeholder='Last Name' className='boxx' style={{width:'48%' ,color:'white'}}/>
        <br />
        <input type="email" name="email" id="email"placeholder='Email Address' className='boxx' style={{width:'48%' ,color:'white'}}/>
        <input type="number" name="mobno" id="mobno"placeholder='Phone No.' className='boxx'  style={{width:'48%' ,color:'white'}}/>
        <br />
        <div class="form-floating">
  <textarea class="boxx" placeholder='Leave a comment here' id="floatingTextarea2"
   style={{height: '130px' , width:'100%'}}
  ></textarea>
  {/* <label for="floatingTextarea2">Message</label> */}
</div>
        <div className="fourthRow">
        <button className='boxx btnn' style={{ marginLeft:'40%' ,width:'20%'}}>Send</button>
        </div>
        </div>
      </div>
    )
  }
}

export default Contact
