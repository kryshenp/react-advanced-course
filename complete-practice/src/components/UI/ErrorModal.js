import React from "react";

import Button from "./Button";
import "./ErrorModal.css";

const ErrorModal = (props) => {
  return (
    <div className="error-modal">
      <div className="error-modal__content">
        <div className="error-modal__header">Invalid Input</div>
        <div className="error-modal__message">{props.modalText}</div>
        <div className="error-modal__actions">
          <Button label="Okay" onClick={props.onHideModal} />
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
