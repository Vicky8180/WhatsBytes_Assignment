import React from 'react'
import "./Navbar.css"
export default function Navbar() {
  return (
  <>
  <div className='navbar_container'>
    <div className='logo_container'>
        <img alt="logo" src="https://seeklogo.com/images/F/For_Dummies-logo-270963AFD1-seeklogo.com.png"/>
        <span>WhatBytes</span>
    </div>
    <div className='user_info'>
        <div className='user_info_pic'>
            <img alt="user_pic"   src="https://seeklogo.com/images/F/For_Dummies-logo-270963AFD1-seeklogo.com.png"/>

        </div>
     <span>Anoop Yadav</span>
    </div>

  </div>
  </>
  )
}
