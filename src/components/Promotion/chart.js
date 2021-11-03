import React from "react";
import { Doughnut } from "react-chartjs-2";


const options = {
  // plugins: {
  //   legend: {
  //     display: false
  //   },
  // }
}


const data = {
  datasets: [
    {
      data: [41, 20, 20, 20, 4],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: ["Public sale", "Liquidity", "Rewards", "Team", "Advisor"],
  options,
};




export default function Chart() {
  return (
    <div style={{ maxWidth: 400 }}>
      <Doughnut data={data} options={options} />
    </div>
  );
}
