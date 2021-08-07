import React from "react";
import { render } from "@testing-library/react";
import { BooleanInstance } from "./BooleanInstance";

const value: boolean = true;

test("renders BooleanInstance component", () => {
  const booleanInstance = render(<BooleanInstance value={value} />);
  expect(booleanInstance).toBeTruthy();
});
