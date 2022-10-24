import React, { useState } from "react";

import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
  Search,
  Selection
} from "@syncfusion/ej2-react-grids";

import { ordersData, contextMenuItems, ordersGrid } from "../data/dummy";
import { Header, Modal, FormRawMaterial, Notification } from "../components";
import useRawMaterial from "../hooks/useRawMaterial";
import { useStateContext } from "../contexts/ContextProvider";

const Orders = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ["Search", "PdfExport"];
 
  const editing = { allowDeleting: true, allowEditing: true };
  const { currentColor, currentMode, activeMenu, setActiveMenu, screenSize } =
    useStateContext();
  const { materiaPrima, notify, setNotify, modal, setModal } = useRawMaterial();

  

  let treegrid;
  const toolbarClick = (args) => {
    if (treegrid && args.item.text === "PDF Export") {
      treegrid.pdfExport();
    }
  };

  return (
    <>
      <div
        className={`${
          currentMode === "Dark" ? "bg-[#33373E]" : "bg-[#fff]"
        } m-2 md:m-10 mt-24 p-2 md:p-10  rounded-3xl`}
      >
        <Header category="Page" title="Materia Prima" />
        <div className="flex justify-end mb-4">
          <span className="sm:ml-3">
            <button
              style={{ backgroundColor: currentColor }}
              type="button"
              className="text-sm px-5 py-3 w-full md:w-auto rounded-lg uppercase font-bold
              bg-sky-500 text-white text-center mt-5 flex gap-2 items-center justify-center"
              onClick={() => setModal(true)}
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
          </span>
        </div>
        <GridComponent
          id="gridcomp"
          selectionSettings={selectionsettings}
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
          dataSource={materiaPrima}
          allowPaging
          allowSorting
          allowExcelExport
          allowPdfExport={true}
          contextMenuItems={contextMenuItems}
          editSettings={editing}
          toolbar={toolbarOptions}
          toolbarClick={toolbarClick}
        >
          <ColumnsDirective
            background={currentMode === "Dark" ? "#33373E" : "#fff"}
          >
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {ordersGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
          <Inject
        
            services={[
              Search,
              Resize,
              Sort,
              ContextMenu,
              Filter,
              Page,
              ExcelExport,
              Edit,
              PdfExport,
              Selection,
            ]}
          />
        </GridComponent>
      </div>

      <Modal
        modal={modal}
        setModal={setModal}
        name="Materia prima"
        size={"sm:max-w-xl"}
      >
        <FormRawMaterial setModal={setModal}></FormRawMaterial>
      </Modal>

      <Notification notify={notify} setNotify={setNotify} />



    </>
  );
};
export default Orders;
