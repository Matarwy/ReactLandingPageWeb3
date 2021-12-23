import React from "react";
import { Doughnut } from "react-chartjs-2";


const options = {
  plugins: {
    legend: {
      display: false
    },
  }
}


const data = {
  datasets: [
    {
      data: [77, 19, 1.5, 1.57, .93],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
        "rgb(63, 81, 181)",
        "rgb(0, 150, 136)"
      ],
      hoverOffset: 4,
    },
  ],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: ["Burned", "Locked, Team & Advisor", "Presale", "Liquidity", "Private Sale"],
  options,
};




export default function Chart() {
  return (
    <div style={{ maxWidth: 400 }}>
      <Doughnut data={data} options={options} />
    </div>
  );
}
