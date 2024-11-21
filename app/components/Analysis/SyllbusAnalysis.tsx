
import React from "react";
import "./Analysis.css";

interface EachSubjectProps {
  subName: string;
  subPercentage: number;
  color:string;
}

const EachSubject: React.FC<EachSubjectProps> = ({ subName, subPercentage, color }) => {
  return (
    <div className="each_subject_box">
      <div className="subject_name">{subName}</div>
      <div className="subject_percentage">
        <div className="progressbar_box">

          <span
            className="progressbar"
            style={{ width: `${subPercentage}%` , backgroundColor:color }}
          ></span>
        </div>
        <span className="percentage_label">{subPercentage}%</span>
      </div>
    </div>
  );
};

export default function SyllabusAnalysis() {
  return (
    <div className="syllabus_analysis_container">
      <div className="s_a_c_heading">Subject Wise Analysis</div>
      <EachSubject subName="HTML Tools, Forms, History" subPercentage={80} color="#2196f3"/>
      <EachSubject subName="Tag & References in HTML" subPercentage={60} color="#ff9800"/>
      <EachSubject subName="Table & References in HTML" subPercentage={24} color="#f44336"/>
      <EachSubject subName="Table & CSS Basics" subPercentage={86} color="#4caf50"/>
    </div>
  );
}
