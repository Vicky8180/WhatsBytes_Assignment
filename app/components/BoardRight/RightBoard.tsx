import React from 'react'
import "./RightBoard.css"
import SyllbusAnalysis from '../Analysis/SyllbusAnalysis'
import QuestionAnalysis from '../Analysis/QuestionAnalysis'
import GraphAnalysis from '../Analysis/GraphComperison'
export default function RightBoard() {
  return (
 <>
 <div className='rightboard_container'>
    <div className='rb_heading'> Skill Test</div>
    <div className='rb_bottom'>
        <div className='rb_b_left'>
           <div className='rb_left_bottom_1'>
            <div className='bottom_left'> 
            <img alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png"/>
            </div>
            <div className='bottom_middle'>
<div className='b_m_1'>This is Hyper text markup language </div>
<div className='b_m_2'>Questions:08 | Duration:15 mins | Submitted on 5 June 2021</div>
            </div>
            <div className='bottom_right_btn'>Update</div>
           </div>


           <div className='rb_left_bottom_2'>
            <div className='bottom_left_2_heading'>Quick Statistics</div>
            <div className='rb_left_bottom_2_box'>
                <div className='box_1'>
                <img alt="logo" src="https://seeklogo.com/images/F/For_Dummies-logo-270963AFD1-seeklogo.com.png"/>
                <div className='box_1_right'>
                <div className='b_m_1'>1</div>
                <div className='b_m_2'>Your Rank</div>
                </div>
                </div>


                <div className='box_1'>
                <img alt="logo" src="https://seeklogo.com/images/F/For_Dummies-logo-270963AFD1-seeklogo.com.png"/>
                <div className='box_1_right'>
                <div className='b_m_1'>12%</div>
                <div className='b_m_2'>Percentage</div>
                </div>
                </div>

                <div className='box_1'>
                <img alt="logo" src="https://seeklogo.com/images/F/For_Dummies-logo-270963AFD1-seeklogo.com.png"/>
                <div className='box_1_right'>
                <div className='b_m_1'>10/15</div>
                <div className='b_m_2'>Correct Answer</div>
                </div>
                </div>


            </div>
           
           </div>
           <div className='rb_left_bottom_2'>
                <GraphAnalysis/>
            </div>
        </div>
        <div className='r_b_b_right'>
            <SyllbusAnalysis/>
            <QuestionAnalysis/>
        </div>
    </div>
 </div>
 </>
  )
}
