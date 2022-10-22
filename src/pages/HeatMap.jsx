import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  HeatMapComponent,
  Inject,
  Legend,
  Tooltip,
} from "@syncfusion/ej2-react-heatmap";

const HeatMap = () => {
  const heatmapData = [
    [73, 39, 26, 39, 94, 0],
    [93, 58, 53, 38, 26, 68],
    [99, 28, 22, 4, 66, 90],
    [14, 26, 97, 69, 69, 3],
    [7, 46, 47, 47, 88, 6],
    [41, 55, 73, 23, 3, 79],
    [56, 69, 21, 86, 3, 33],
    [45, 7, 53, 81, 95, 79],
    [60, 77, 74, 68, 88, 51],
    [25, 25, 10, 12, 78, 14],
    [25, 56, 55, 58, 12, 82],
    [74, 33, 88, 23, 86, 59],
  ];

  return (
    <HeatMapComponent
      id="heatmap"
      titleSettings={{
        text: "Sales Revenue per Employee (in 1000 US$)",
        textStyle: {
          size: "15px",
          fontWeight: "500",
          fontStyle: "Normal",
          fontFamily: "Segoe UI",
        },
      }}
      xAxis={{
        labels: [
          "Nancy",
          "Andrew",
          "Janet",
          "Margaret",
          "Steven",
          "Michael",
          "Robert",
          "Laura",
          "Anne",
          "Paul",
          "Karin",
          "Mario",
        ],
      }}
      yAxis={{
        labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
      }}
      cellSettings={{
        showLabel: true,
      }}
      paletteSettings={{
        palette: [
          { value: 0, color: "#C06C84" },
          { value: 50, color: "#6C5B7B" },
          { value: 100, color: "#355C7D" },
        ],
        type: "Gradient",
      }}
      dataSource={heatmapData}
      legendSettings={{
        position: "Right",
        showLabel: true,
        height: "150",
      }}
    >
      <Inject services={[Legend, Tooltip]} />
    </HeatMapComponent>
  );
};

export default HeatMap;
