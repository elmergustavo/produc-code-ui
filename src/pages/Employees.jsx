import React, { useState } from "react";
import {
  GridComponent,
  Inject,
  ColumnsDirective,
  ColumnDirective,
  Search,
  Page,
} from "@syncfusion/ej2-react-grids";

import useProveedor from "../hooks/useProveedor";

import { employeesData, employeesGrid } from "../data/dummy";
import { Header, Modal, FormProvider, Notification } from "../components";
import { useStateContext } from "../contexts/ContextProvider";
const Employees = () => {
  const { currentColor, currentMode, activeMenu, setActiveMenu, screenSize } =
    useStateContext();
  const toolbarOptions = ["Search"];

  const editing = { allowDeleting: true, allowEditing: true };

  const { proveedores, notify, setNotify, modal, setModal } = useProveedor();
  console.log(proveedores);
  return (
    <>
      <div className={`${currentMode === 'Dark' ? 'bg-[#33373E]' : 'bg-[#fff]'} m-2 md:m-10 mt-10 p-2 md:p-10 rounded-2xl`}>
        <Header category="Page" title="Proveedores" />
        <div className="flex justify-end mb-4">
          <span className="sm:ml-3">
            <button
              style={{ backgroundColor: currentColor }}
              type="button"
              className=" text-sm px-5 py-3 w-full md:w-auto rounded-lg uppercase font-bold
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
              Agregar Proveedor
            </button>
          </span>
        </div>
        <GridComponent
          dataSource={proveedores}
          width="auto"
          allowPaging
          allowSorting
          pageSettings={{ pageCount: 5 }}
          editSettings={editing}
          toolbar={toolbarOptions}
        >
          <ColumnsDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {employeesGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
          <Inject services={[Search, Page]} />
        </GridComponent>
      </div>
      <Modal modal={modal} setModal={setModal} name="Proveedores"  size={"sm:max-w-xl"}>
        <FormProvider setModal={setModal}></FormProvider>
      </Modal>

      <Notification notify={notify} setNotify={setNotify} />
    </>
  );
};
export default Employees;
