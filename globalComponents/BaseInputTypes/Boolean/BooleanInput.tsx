import React, { FC, ReactElement } from "react";
import stylesheet from "../stylesheet";

export interface BooleanInputProps {
  name: string;
  placeholder?: string;
  size?: number;
  style?: React.CSSProperties;
  value: any;
  updateValue: React.Dispatch<React.SetStateAction<boolean>>;
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
export const BooleanInput: FC<BooleanInputProps> = ({
  name,
  placeholder = "boolean",
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
      data-testid="BooleanInput"
    >
      <input
        type="checkbox"
        onChange={handleUpdate}
        style={{ width: "100%", ...stylesheet.checkbox(size) }}
        name={name}
        id={name}
        placeholder={placeholder}
      />
      <label style={stylesheet.text}>{name}</label>
    </div>
  );
};
