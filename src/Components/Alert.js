import React from "react";

function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        style={{
          backgroundColor: props.mode === "dark" ? "#042743" : "white",
          color: props.mode === "dark" ? "white" : "black",
        }}
        role="alert"
      >
        <strong>{capitalize(props.alert.type)}</strong> {props.alert.msg}
      </div>
    )
  );
}

export default Alert;
