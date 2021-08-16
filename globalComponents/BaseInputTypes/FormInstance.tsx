import React, { FC, ReactElement } from "react";
import { BooleanInput } from "./Boolean/BooleanInput";
import { DateInput } from "./Date/DateInput";
import { EmailInput } from "./Email/EmailInput";
import { NumberInput } from "./Number/NumberInput";
import { PasswordInput } from "./Password/PasswordInput";
import { SelectInput } from "./Select/SelectInput";
import { StringInput } from "./String/StringInput";
import stylesheet from "./stylesheet";

export interface FormInstanceProps {
  values: Array<{
    name: string;
    choices?: Array<string>;
    placeholder?: string;
    type: TYPE;
    value: any;
    updateValue: React.Dispatch<React.SetStateAction<any>>;
  }>;
  size?: number;
  style?: React.CSSProperties;
}

export enum TYPE {
  boolean,
  date,
  email,
  number,
  password,
  repeatedPassword,
  select,
  string,
}

/**
 * This component will display a form from an input array of wanted input fields
 * @param size (number, optional)
 * @param style (React.CSSProperties object, optional)
 * @param values (object)
 * In values:
 * @param name (string)
 * @param placeholder (string)
 * @param type (TYPE)
 * @param value (useState value)
 * @param updateValue (useState update function)
 * @constructor
 */
export const FormInstance: FC<FormInstanceProps> = ({
  values,
  size = 1,
  style = {},
}): ReactElement => {
  const DisplayForm = ({ values, size = 1, style = {} }: FormInstanceProps) => {
    return values.map((value, index) => {
      switch (value.type) {
        case TYPE.boolean:
          return (
            <div style={stylesheet.inputContainer(size)} key={index}>
              <BooleanInput size={size} {...value} style={style} />
            </div>
          );
        case TYPE.date:
          return (
            <div style={stylesheet.inputContainer(size)} key={index}>
              <DateInput size={size} {...value} style={style} />
            </div>
          );
        case TYPE.email:
          return (
            <div style={stylesheet.inputContainer(size)} key={index}>
              <EmailInput size={size} {...value} style={style} />
            </div>
          );
        case TYPE.number:
          return (
            <div style={stylesheet.inputContainer(size)} key={index}>
              <NumberInput size={size} {...value} style={style} />
            </div>
          );
        case TYPE.password:
          return (
            <div style={stylesheet.inputContainer(size)} key={index}>
              <PasswordInput size={size} {...value} style={style} />
            </div>
          );
        case TYPE.repeatedPassword:
          if (values[index - 1].type === TYPE.password) {
            return (
              <div style={stylesheet.inputContainer(size)} key={index}>
                <PasswordInput
                  size={size}
                  color={
                    value.value === values[index - 1].value &&
                    value.value !== ""
                  }
                  {...value}
                  style={style}
                />
              </div>
            );
          } else return null;
        case TYPE.select:
          return (
            <div style={stylesheet.inputContainer(size)} key={index}>
              <SelectInput size={size} {...value} style={style} />
            </div>
          );
        case TYPE.string:
          return (
            <div style={stylesheet.inputContainer(size)} key={index}>
              <StringInput size={size} {...value} style={style} />
            </div>
          );
        default:
          return null;
      }
    });
  };

  return (
    <form
      style={{ ...stylesheet.formContainer }}
      onSubmit={(event) => event.preventDefault()}
      autoComplete="off"
    >
      {DisplayForm({ values, size, style })}
    </form>
  );
};
