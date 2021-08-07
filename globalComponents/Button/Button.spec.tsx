import React from "react";
import { render } from "@testing-library/react";
import { Button } from "./Button";

const value: string = "String";

test("renders Button component", () => {
  const button = render(<Button onClick={() => {}} />);
  expect(button).toBeTruthy();
});
