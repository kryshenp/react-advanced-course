import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

// functional component
const Chart = (props) => {
  const dataPointvalues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointvalues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label} />;
      })}
    </div>
  );
};

export default Chart;
