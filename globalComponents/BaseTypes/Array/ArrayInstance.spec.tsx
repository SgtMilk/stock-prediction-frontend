import React from "react";
import { render } from "@testing-library/react";
import { ArrayInstance } from "./ArrayInstance";

const value: Array<any> = [];

test("renders ArrayInstance component", () => {
  const arrayInstance = render(<ArrayInstance value={value} />);
  expect(arrayInstance).toBeTruthy();
});
