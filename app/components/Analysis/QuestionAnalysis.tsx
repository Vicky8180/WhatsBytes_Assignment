"use client"


import React from "react";
import { Chart } from "react-google-charts";
import "./Analysis.css"
export const data = [
  ["Task", "Hours per Day"],
  ["Work", 12],
  ["Eat", 15],

];

export const options = {
  title: "My Daily Activities",
  pieHole: 0.4,
  is3D: false,
};

export default function App() {
  return (
    <div className="qa_container">
   <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
    </div>
 
  );
}