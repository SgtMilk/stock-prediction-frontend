import React from "react";
import { render } from "@testing-library/react";
import { Delegate } from "./Delegate";

const value: string = "String";

test("renders Delegate component", () => {
  const delegate = render(<Delegate value={value} />);
  expect(delegate).toBeTruthy();
});
