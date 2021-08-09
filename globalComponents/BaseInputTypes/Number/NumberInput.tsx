import React, { FC, ReactElement } from "react";
import stylesheet from "../stylesheet";

export interface NumberInputProps {
  name: string;
  placeholder?: string;
  size?: number;
  style?: React.CSSProperties;
  value: any;
  updateValue: React.Dispatch<React.SetStateAction<number>>;
}

/**
 * This component will display an input for a number.
 * @param name (string)
 * @param placeholder (string)
 * @param size (number, optional)
 * @param style (React.CSSProperties object, optional)
 * @param value (useState value)
 * @param updateValue (useState update function)
 * @constructor
 */
export const NumberInput: FC<NumberInputProps> = ({
  name,
  placeholder = "number",
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
      data-testid="NumberInput"
    >
      <style>{`
        .input {
          all: unset;
        }
      `}</style>
      <input
        type="number"
        style={{ width: "100%" }}
        name={name}
        id={name}
        onChange={handleUpdate}
        placeholder={placeholder}
        className="input"
      />
    </div>
  );
};
