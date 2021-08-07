import React from "react";
import { render } from "@testing-library/react";
import { ObjectInstance } from "./ObjectInstance";

const value: { [key: string]: any } = {};

test("renders ObjectInstance component", () => {
  const objectInstance = render(<ObjectInstance value={value} />);
  expect(objectInstance).toBeTruthy();
});
