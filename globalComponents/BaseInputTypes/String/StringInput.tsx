import React, { FC, ReactElement } from "react";
import stylesheet from "../stylesheet";

export interface StringInputProps {
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
export const StringInput: FC<StringInputProps> = ({
  name,
  placeholder = "string",
  size = 1,
  style = {},
  value,
  updateValue,
}): ReactElement => {
  const handleUpdate = (e: any) => {
    updateValue(e.target.value);
  };

  return (
    <div
      style={{ ...stylesheet.inputBox(size), ...style }}
      data-testid="StringInput"
    >
      <input
        type="text"
        onChange={handleUpdate}
        style={{ width: "100%" }}
        name={name}
        id={name}
        placeholder={placeholder}
        className="input"
      />
    </div>
  );
};
