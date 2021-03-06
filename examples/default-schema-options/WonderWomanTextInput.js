import React from "react";

const revealStringWonderWoman =
  "We have a saying, my people. Don’t kill if you can wound, don’t wound if you can subdue, don’t subdue if you can pacify, and don’t raise your hand at all until you’ve first extended it. 🦸";

const wonderWomanReveal = str =>
  revealStringWonderWoman.substring(0, str.length);

const WonderWomanTextInput = ({ onChange, onBlur, value, label }) => (
  <label className="TShirtForm-component__label TShirtForm-text-input__label">
    <span>
      {"Wonder Woman: "}
      {label}
    </span>
    <input
      type="text"
      value={wonderWomanReveal(value)}
      onChange={e => onChange(wonderWomanReveal(e.target.value))}
      onBlur={e => onBlur(e)}
    />
  </label>
);

export default WonderWomanTextInput;
