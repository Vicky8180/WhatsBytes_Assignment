// import React from 'react'
// import "./dashboard.css"
// export default function OptionItms() {
//   return (
//   <>
// <div className='option_items'>
// <div className='option_item_1'>
//     <img alt='opt1' src="https://seeklogo.com/images/F/For_Dummies-logo-270963AFD1-seeklogo.com.png"/>
//     <span>Dashboard</span>
// </div>

// <div className='option_item_1'>
// <img alt='opt1' src="https://seeklogo.com/images/F/For_Dummies-logo-270963AFD1-seeklogo.com.png"/>
// <span>Skill Test</span>
// </div>

// <div className='option_item_1'>
// <img alt='opt1' src="https://seeklogo.com/images/F/For_Dummies-logo-270963AFD1-seeklogo.com.png"/>
// <span>Internship</span>
// </div>
// </div>

//   </>
//   )
// }
"use client"; 

import React, { useState } from 'react';
import './dashboard.css';

const OptionItems: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const options = [
    { id: 1, label: 'Dashboard', imgSrc: 'https://seeklogo.com/images/F/For_Dummies-logo-270963AFD1-seeklogo.com.png' },
    { id: 2, label: 'Skill Test', imgSrc: 'https://seeklogo.com/images/F/For_Dummies-logo-270963AFD1-seeklogo.com.png' },
    { id: 3, label: 'Internship', imgSrc: 'https://seeklogo.com/images/F/For_Dummies-logo-270963AFD1-seeklogo.com.png' },
  ];

  const handleSelect = (polling: number) => {
    setSelectedIndex(polling);
  };

  return (
    <div className='option_items'>
      {options.map((option, ind) => (
        <div
          key={option.id}
          className='option_item_1'
          onClick={() => handleSelect(ind)}
          style={{
            backgroundColor: selectedIndex === ind? '#edf2fa' : 'transparent',
            cursor: 'pointer',
          }}
        >
          <img alt={option.label} src={option.imgSrc} />
          <span>{option.label}</span>
        </div>
      ))}
    </div>
  );
}

export default OptionItems;
