// import React from 'react'
// import "./Analysis.css"

// const EachSubject=(subName:String, subPercentage:Number)=>{
//     return (
//         <>
// <div className='each_subject_box'>
//     <div className='subject_name'>{subName}</div>
//     <div className='subject_percentage'>{subPercentage:Number}</div>
// </div>

//         </>
//     )
// }

// export default function SyllbusAnalysis() {

//   return (
//    <>
//    <div className='syllbus_ana_container'>
// <EachSubject subName={"hel"} subPercenatge={90}/>
//    </div>
//    </>
//   )
// }


import React from 'react'
import './Analysis.css'

// Correct the props definition by using destructuring and proper type annotations
interface EachSubjectProps {
  subName: string;
  subPercentage: number;
}

const EachSubject: React.FC<EachSubjectProps> = ({ subName, subPercentage }) => {
  return (
    <div className="each_subject_box">
      <div className="subject_name">{subName}</div>
      
      <div className="subject_percentage">
        <div className='progressbar_box'>
            <span className='progressbar' ></span>
            </div> 
        <span>{subPercentage}</span>
        </div> 
     
    </div>
  );
}

export default function SyllbusAnalysis() {
  return (
    <div className="syllbus_ana_container">
       
       <div className='s_a_c_heading'> Subject Wise Analysis</div>
      <EachSubject subName="HTML Tools, Forms, History" subPercentage={80} />
      <EachSubject subName="Tag & Referneces in HTML" subPercentage={60} />
      <EachSubject subName="Table & Referneces in HTML" subPercentage={24} />
      <EachSubject subName="Table & Css Bascis" subPercentage={86} />
    
    
    </div>
  );
}
