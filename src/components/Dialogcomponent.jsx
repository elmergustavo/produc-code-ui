import React, { useState } from "react";
import { DialogComponent } from "@syncfusion/ej2-react-popups";

const Dialogcomponent = () => {
    
  const buttons = [
    {
      buttonModel: {
        content: "OK",
        cssClass: "e-flat",
        isPrimary: true,
      },
      click: () => {
        setState({ hideDialog: false });
      },
    },
    {
      buttonModel: {
        content: "Cancel",
        cssClass: "e-flat",
      },
      click: () => {
        setState({ hideDialog: false });
      },
    },
  ];
  const dialogClose = () => {
    setState({ hideDialog: false });
  };
  const state = {
    hideDialog: true,
  };

  const handleClick = () => {
    setState({ hideDialog: true });
  };

  return (
    <div className="App" id="dialog-target">
      <button
        className="e-control e-btn"
        id="targetButton1"
        role="button"
        onClick={(handleClick)}
      >
        Open
      </button>
      <DialogComponent
        width="400px"
        target="#dialog-target"
        close={dialogClose}
        header="Dialog"
        visible={state.hideDialog}
        showCloseIcon={true}
        buttons={buttons}
      >
        This is a Dialog with button and primary button{" "}
      </DialogComponent>
    </div>
  );
};

export default Dialogcomponent;
