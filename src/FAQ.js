import React, { Component } from 'react'
import './FAQ.css'
export class FAQ extends Component {
  render() {
    return (
      <div>
        <div className="heading_FAQ">
            F.A.Q.
        </div>
        <div className="subHeadFAQ">
            For Any Other Queries, Contact Us
        </div>
        <div className="questions">
        <div className="leftQuestions">
            <div className="ques">
            How soon do I get my item?
            </div>
                <div className="ans">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita quod natus, nesciunt amet pariatur tenetur animi iusto assumenda eveniet qui?
                </div>
            <div className="ques">
                Is there a free shipping?
            </div>
            <div className="ans">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita quod natus, nesciunt amet pariatur tenetur animi iusto assumenda eveniet qui?
                </div>
            <div className="ques">
                Can I get several discounts?
            </div>
            <div className="ans">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita quod natus, nesciunt amet pariatur tenetur animi iusto assumenda eveniet qui?
                </div>
        </div>

        <div className="rightQuestions">
            <div className="ques">
                Do you deliver it as a gift?
            </div>
            <div className="ans">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita quod natus, nesciunt amet pariatur tenetur animi iusto assumenda eveniet qui?
                </div>
            <div className="ques">
                What are payment methods do you accept?
            </div>
            <div className="ans">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita quod natus, nesciunt amet pariatur tenetur animi iusto assumenda eveniet qui?
                </div>
            <div className="ques">
                I have a different question?
            </div>
            <div className="ans">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita quod natus, nesciunt amet pariatur tenetur animi iusto assumenda eveniet qui?
                </div>
        </div>
        </div>
      </div>
    )
  }
}

export default FAQ
