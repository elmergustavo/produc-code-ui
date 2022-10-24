import * as React from "react";
import * as ReactDOM from "react-dom";
import Area from "./Charts/Area";
import Bar from "./Charts/Bar";
import LegendHeatMap from "../components/HeatMap/LegendHeatMap";
import { FiMaximize2 } from "react-icons/fi";
import { Modal } from "../components";
import {
  HeatMapComponent,
  Inject,
  Legend,
  Tooltip,
} from "@syncfusion/ej2-react-heatmap";
import { useStateContext } from "../contexts/ContextProvider";
const HeatMap = () => {
  const [modal, setModal] = React.useState(false);
  const [size,setSize] = React.useState("");
  const { currentMode } = useStateContext();
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

  const haldSize  = () => {
    setSize("100%")
  }


  const config = () => {
    setModal(true);
    setSize("99%")
  }
  return (
    <>
      <HeatMapComponent
        id="heatmap"
        background={currentMode === "Dark" ? "#33373E" : "#fff"}
        titleSettings={{
          text: "Sales Revenue per Employee (in 1000 US$)",
          color: "#fff",
          textStyle: {
            size: "15px",
            fontWeight: "500",
            fontStyle: "Normal",
            fontFamily: "Segoe UI",
            color: `${currentMode === "Dark" ? "#fff" : "#33373E"}`,
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
          textStyle: {
            color: `${currentMode === "Dark" ? "#fff" : "#33373E"}`,
          },
        }}
        yAxis={{
          labels: ["RECIBE", "STOCK", "TOTAL", "PEDIDO", "VENTA", "STOCK NUEVO"],
          textStyle: {
            color: `${currentMode === "Dark" ? "#fff" : "#33373E"}`,
          },
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

      <button
        type="button"
        className="text-sm px-5 py-3 w-full md:w-auto rounded-lg uppercase font-bold
              bg-sky-500 text-white text-center mt-5 flex gap-2 items-center justify-center"
        onClick={config}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
            clipRule="evenodd"
          />
        </svg>
        Agregar Materia prima
      </button>

      <Modal modal={modal} setModal={setModal} name="Materia prima" size={"sm:max-w-7xl"}>
        <button
        onClick={haldSize}
        >
          <FiMaximize2 />
        </button>
        <LegendHeatMap size={size} />
      </Modal>
     
      {/* <Area /> */}
    </>
  );
};

export default HeatMap;
