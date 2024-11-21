import React from 'react'
import "./dashboard.css"
import OptionItms from './OptionItms'
import RightBoard from '../BoardRight/RightBoard'
export default function dashboard() {
  return (
  <>
  <div className='dashboard_container'>
    <div className='dashboard_left_panel'>
      <OptionItms/>
    </div>
    <div className='dashboard_right_panel'>
      <RightBoard/>
    </div>
  </div>
  </>
  )
}
