import React from "react";
import { renderFuncOrString } from "../utils";

const EmailInputComponent = ({ onChange, onBlur, value, label }) => (
  <label className="ReFormJS-component__label ReFormJS-email-input__label ReFormJS-text-input__label">
    <span>{renderFuncOrString(label)}</span>
    <input
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
      onBlur={e => onBlur(e)}
    />
  </label>
);

export default EmailInputComponent;