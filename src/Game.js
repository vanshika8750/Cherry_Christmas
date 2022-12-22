import React, { Component } from 'react'
import rps from './pics/R_P_S.jpg'
import rock from './pics/Rock.jpg'
import paper from './pics/Paper.jpg'
import scissor from './pics/Scissor.jpg'
import pointer from './pics/pointer.png'
import tree from './pics/ch_tree.gif'
import './Game.css'
export class Game extends Component {
    
  render() {
    let r;
    const func_rock=()=>{
        let res=document.getElementsByClassName("result_display")[0]
        res.style.backgroundColor="lightblue"
            res.style.color="white"
        res.innerHTML="<h2>You choosed 'Rock'.<div>Check Result</div></h2>"
        r='Rock'
    }
    const func_paper=()=>{
        let res=document.getElementsByClassName("result_display")[0]
        res.style.backgroundColor="lightblue"
            res.style.color="white"
        res.innerHTML="<h2>You choosed 'Paper'.<div>Check Result</div></h2>"
        r='Paper'
    }
    const func_scissor=()=>{
        let res=document.getElementsByClassName("result_display")[0]
        res.style.backgroundColor="lightblue"
            res.style.color="white"
        res.innerHTML="<h2>You choosed 'Scissor'.<div>Check Result</div></h2>"
        r='Scissor'
    };
    const result=()=>{
        let res=document.getElementsByClassName("result_display")[0]
        let win=0;
        let comp=Math.floor(Math.random()*3)
        if(comp==1)
        comp='Rock'
        else if(comp==2)
        comp='Paper'
        else 
        comp='Scissor'
        console.log(`You choosed ${r} and computer choosed ${comp}`)
        if(r==comp)
        {res.style.backgroundColor="lightblue"
        res.style.color="blue"
            res.innerHTML= `<h2>Match draw ! Play Again.</h2>`}
        else
        {
            if( r=='Rock')
            {
                if(comp=='Paper')
                win=0
                else win=1;
            }
            else if(r=='Paper')
            {
                if(comp=='Rock') win=1;
                else win=0;
            }
            else{
                if(comp=='Rock')
                win=0;
                else win=1;
            }
            if(win==1)
           { 
            res.style.backgroundColor="lightgreen"
            res.style.color="green"
            res.innerHTML=`<h2>Congratulations!! You won.<div>You choosed "${r}" while Computer choosed "${comp}".</div> 
            <div>You availed a discount of 20% on your next purchase.</div></h2>`
            }
            else
           { 
            res.style.backgroundColor="red"
            res.style.color="white"
            res.innerHTML=`<h2>Ooops!! You lost.<div>You choosed "${r}" while Computer choosed "${comp}".</div><div>You haven't availed any discount</div> </h2>`}
        }

    }
    return (
      <div>
        <div className="final_head">
            <div className="tree">
                <img style={{
                    width:'100px'
                }
                } src={tree} alt="tree"/>
            </div>
        <div className="title">

        <div>To avail Special Offer</div>
        <div>Play the game below</div>

        </div>
        <div className="tree">
                <img style={{
                    width:'100px'
                }
                } src={tree} alt="tree"/>
            </div>
        </div>

                {/* for rules of game */}
        <div class="accordion accordion-flush sizee">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button  fontt" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Rules of this game
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <div>
            1. Rock only wins over Scissor 
        </div>
        <div>
            2. Paper only wins over Rock
        </div>
        <div>
            3. Scissors only wins over Paper
        </div>
      </div>
    </div>
  </div>
</div>


{/* game */}
        <div className="elts">
        <div className="rock">
        <div style= {{marginLeft:'70px'}}>Click here for Rock</div>
            <div><img src={pointer} alt="point" style={{width:'50px',marginLeft:'120px'}} /></div>
            <button id='Rock'
            onClick={func_rock}
            >
                <img src={rock} alt="rock" className='rock_image'/>
            </button>
        </div>
        <div className="paper">
        <div style= {{marginLeft:'70px'}}>Click here for Paper</div>
            <div><img src={pointer} alt="point" style={{width:'50px',marginLeft:'120px'}} /></div>
        <button id="Paper"
        onClick={func_paper}>
            <img src={paper}alt="Paper"  className='paper_image'/>
        </button>
        </div>
        <div className="scissor">
        <div style= {{marginLeft:'70px'}}>Click here for Scissor</div>
            <div><img src={pointer} alt="point" style={{width:'50px',marginLeft:'120px'}} /></div>
            <button id="Scissor"
            onClick={func_scissor}>
                <img src={scissor} alt="Scissor" className='scissor_image' />
            </button>
        </div>
        <div className="equal">
            <div className="first_line">

            </div>
            <div className="second_line">

            </div>
        </div>
        <div className="result">
            <div style= {{marginLeft:'70px'}}>Click here for Result</div>
            <div><img src={pointer} alt="point" style={{width:'50px',marginLeft:'120px'}} /></div>
          <button id="Result" onClick={result}>
            <img src={rps} alt="Result" className='Result_image' />
          </button>

        </div>
        </div>
        <div className="result_display">
</div>

      </div>
    )
  }
}

export default Game
