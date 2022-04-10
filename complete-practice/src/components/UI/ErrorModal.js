import React from "react";

import Button from "./Button";

const ErrorModal = (props) => {
  return (
    <div>
      <div>
        <div>Invalid Input</div>
        {props.modalText}
        <div>
          <Button label="Okay" onClick={props.onHideModal} />
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
