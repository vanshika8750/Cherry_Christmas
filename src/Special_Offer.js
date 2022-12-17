import React, { Component } from 'react'
import './Special_Offer.css'
import candle from './pics/Candle1.webp'
import santadoll from './pics/Santadoll1.webp'
import xmasTree from './pics/ChristmassTree1.webp'
import cap from './pics/Holiday Cap.webp'
import doll from './pics/Holidaydoll.webp'
import candl from './pics/Candle2.webp'
export class Special_Offer extends Component {
  render() {
    return (
      <div>
        <div className="title">
        Here is a special offer for you !!!!!!!!!!
        </div>
        {/* <div className="gift">
            pic of gift 
            when gets open , 
            displays a discount offer code 
            to the customer
        </div> */}



        {/* cards */}
        <div className="firstRow">
               <div className="card" >
              <img src={candle} className="card-img-top" alt="pic"/>
              <div className="card-body">
                <h5 className="card-title">Holiday Candle</h5>
                <p className="card-text"> Rs. 60</p>
                <a href="#" className="btn btn-primary">ADD TO CART</a>
              </div>
               </div>

               <div className="card" >
              <img src={santadoll} className="card-img-top" alt="pic"/>
              <div className="card-body">
                <h5 className="card-title">Santa Doll</h5>
                <p className="card-text"> Rs. 60</p>
                <a href="#" className="btn btn-primary">ADD TO CART</a>
              </div>
               </div>

               <div className="card" >
              <img src={xmasTree} className="card-img-top" alt="pic"/>
              <div className="card-body">
                <h5 className="card-title">Christmas Tree</h5>
                <p className="card-text"> Rs. 60</p>
                <a href="#" className="btn btn-primary">ADD TO CART</a>
              </div>
               </div>
        </div>

        <div className="SecondRow">
        <div className="card" >
              <img src={cap} className="card-img-top" alt="pic"/>
              <div className="card-body">
                <h5 className="card-title">Holiday Cap</h5>
                <p className="card-text"> Rs. 60</p>
                <a href="#" className="btn btn-primary">ADD TO CART</a>
              </div>
               </div>

               <div className="card" >
              <img src={doll} className="card-img-top" alt="pic"/>
              <div className="card-body">
                <h5 className="card-title">Holiday Doll</h5>
                <p className="card-text"> Rs. 60</p>
                <a href="#" className="btn btn-primary">ADD TO CART</a>
              </div>
               </div>

               <div className="card" >
              <img src={candl} className="card-img-top" alt="pic"/>
              <div className="card-body">
                <h5 className="card-title">Holiday Candle</h5>
                <p className="card-text"> Rs. 60</p>
                <a href="#" className="btn btn-primary">ADD TO CART</a>
              </div>
               </div>
        </div>

        <nav aria-label="Page navigation example">
  
  <ul className="pagination justify-content-center">
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item"><a className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
      </div>
    )
  }
}

export default Special_Offer
