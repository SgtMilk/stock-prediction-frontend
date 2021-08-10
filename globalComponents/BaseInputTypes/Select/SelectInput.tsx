import React, { FC, ReactElement } from "react";
import stylesheet from "../stylesheet";

export interface SelectInputProps {
  name: string;
  choices?: Array<string>;
  placeholder?: string;
  size?: number;
  style?: React.CSSProperties;
  value: any;
  updateValue: React.Dispatch<React.SetStateAction<string>>;
}

/**
 * This component will display a select input
 * @param name (string)
 * @param choices (array of strings)
 * @param size (number, optional)
 * @param style (React.CSSProperties object, optional)
 * @param value (useState value)
 * @param updateValue (useState update function)
 * @constructor
 */
export const SelectInput: FC<SelectInputProps> = ({
  name,
  choices,
  placeholder,
  size = 1,
  style = {},
  value,
  updateValue,
}): ReactElement => {
  const handleUpdate = (e: any) => {
    updateValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div
      style={{ ...stylesheet.inputBox(size), ...style }}
      data-testid="SelectInput"
    >
      <style>{`
        .input {
          all: unset;
        }
      `}</style>
      <select
        onChange={handleUpdate}
        style={{ width: "100%" }}
        name={name}
        id={name}
        className="input"
        value={value === "" ? "placeholder" : value}
      >
        <option disabled value="placeholder" style={stylesheet.option}>
          {placeholder ? placeholder : "Choose:"}
        </option>
        {choices
          ? choices.map((choice, i) => (
              <option value={choice} style={stylesheet.option} key={i}>
                {choice}
              </option>
            ))
          : null}
      </select>
    </div>
  );
};
