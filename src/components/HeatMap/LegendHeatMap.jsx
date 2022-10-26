import React, { useEffect } from "react";
import {
  HeatMapComponent,
  Inject,
  Legend,
  Tooltip,
  Adaptor,
} from "@syncfusion/ej2-react-heatmap";

import useProduct from "../../hooks/useProduct";
const LegendHeatMap = ({ size, idProduct }) => {
  console.log(idProduct);

  const { getMatrizProduct, viewMatriz } = useProduct();
  const heatmapData = [
    [0, 12, 12, 3, 3, 9],
    [3, 9, 12, 3, 3, 9],
    [3, 9, 12, 6, 5, 7],
    [6, 7, 13, 3, 3, 10],
    [3, 10, 13, 3, 3, 10],
  ];

  useEffect(() => {
    getMatrizProduct(idProduct);
  }, []);
  return (
    <HeatMapComponent
      width={size}
      id="heatmap"
      titleSettings={{
        text: "Tabla de Distribución",
        textStyle: {
          size: "15px",
          fontWeight: "500",
          fontStyle: "Normal",
          fontFamily: "Segoe UI",
        },
      }}
      xAxis={{
        labels: [
          "16/10/22",
          "17/10/2022",
          "18/10/2022",
          "19/10/2022",
          "20/10/2022",
          "21/10/2022",
          "22/10/2022",
          "23/10/2022",
          "24/10/2022",
          "25/10/2022",
          "26/10/2022",
          "27/10/2022",
        ],
      }}
      yAxis={{
        labels: ["RECIBE", "STOCK", "TOTAL", "PEDIDO", "VENTA", "STOCK NUEVO"],
      }}
      paletteSettings={{
        palette: [
          { value: 0, color: "#C2E7EC" },
          { value: 10, color: "#AEDFE6" },
          { value: 20, color: "#9AD7E0" },
          { value: 25, color: "#86CFDA" },
          { value: 30, color: "#72C7D4" },
          { value: 40, color: "#5EBFCE" },
          { value: 50, color: "#4AB7C8" },
          { value: 55, color: "#36AFC2" },
          { value: 60, color: "#309DAE" },
          { value: 70, color: "#2B8C9B" },
          { value: 75, color: "#257A87" },
          { value: 80, color: "#206974" },
          { value: 85, color: "#1B5761" },
          { value: 90, color: "#15464D" },
          { value: 100, color: "#000000" },
        ],
        type: "Fixed",
      }}
      legendSettings={{
        position: "Right",
        height: "150px",
      }}
      dataSource={heatmapData}
    >
      <Inject services={[Legend, Tooltip, Adaptor]} />
    </HeatMapComponent>
  );
};

export default LegendHeatMap;
