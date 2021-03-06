import React from "react";

export default function Alert(props) {
  console.log(props.alert);
  return props.alert ? (
    <div
      className={`alert alert-${props.alert.type} alert-dismissible fade show`}
      role="alert"
    >
      <strong>
        {props.alert.msg}: {props.alert.type}
      </strong>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  ) : (
    <div />
  );
}
