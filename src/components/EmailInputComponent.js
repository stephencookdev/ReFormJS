import React from "react";

const EmailInputComponent = ({ required, onChange, onBlur, value, label }) => (
  <label className="ReFormJS-component__label ReFormJS-email-input__label ReFormJS-text-input__label">
    <span>
      {label}
      {required && <span className="ReFormJS-component__required-star" />}
    </span>
    <input
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
      onBlur={e => onBlur(e)}
    />
  </label>
);

export default EmailInputComponent;
