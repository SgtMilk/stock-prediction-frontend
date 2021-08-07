import React from "react";
import { render } from "@testing-library/react";
import { NumberInstance } from "./NumberInstance";

const value: number = 5;

test("renders NumberInstance component", () => {
  const numberInstance = render(<NumberInstance value={value} />);
  expect(numberInstance).toBeTruthy();
});
