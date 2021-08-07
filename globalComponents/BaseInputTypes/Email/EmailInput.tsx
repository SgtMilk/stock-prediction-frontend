import React, { useState, ReactElement, FC, useRef } from "react";
import stylesheet from "../stylesheet";
import "../stylesheet.css";

export interface EmailInputProps {
  name: string;
  placeholder?: string;
  size?: number;
  style?: React.CSSProperties;
  value: any;
  updateValue: React.Dispatch<React.SetStateAction<string>>;
}

/**
 * This component will display an input for an email. It will show an indicator if the email is valid
 * @param name (string)
 * @param placeholder (string)
 * @param size (number, optional)
 * @param style (React.CSSProperties object, optional)
 * @param value (useState value)
 * @param updateValue (useState update function)
 * @constructor
 */
export const EmailInput: FC<EmailInputProps> = ({
  name,
  placeholder = "email",
  size = 1,
  style = {},
  value,
  updateValue,
}): ReactElement => {
  const [errorMessage, setErrorMessage] = useState(false);

  const ValidateEmail = (e: any) => {
    updateValue(e.target.value);
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setErrorMessage(re.test(String(value).toLowerCase()));
  };

  return (
    <div
      style={{ ...stylesheet.inputBox(size), ...style }}
      data-testid="EmailInput"
    >
      <input
        type="email"
        onChange={ValidateEmail}
        style={{ width: "100%" }}
        name={name}
        id={name}
        placeholder={placeholder}
        className="input"
      />
      <div style={stylesheet.icon(size, errorMessage ? "limegreen" : "red")} />
    </div>
  );
};
