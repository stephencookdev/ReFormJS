import React from "react";

const TextInputComponent = ({ onChange, value, label, error }) => (
  <label
    className={
      "ReFormJS-component__label ReFormJS-text-input__label" +
      (error ? " ReFormJS-component__label--error" : "")
    }
  >
    {label}
    <input type="text" value={value} onChange={e => onChange(e.target.value)} />
  </label>
);

export default TextInputComponent;
