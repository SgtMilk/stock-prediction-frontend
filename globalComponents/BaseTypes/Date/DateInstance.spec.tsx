import React from "react";
import { render } from "@testing-library/react";
import { DateInstance } from "./DateInstance";

const value: Date = new Date("11-11-2000");

test("renders DateInstance component", () => {
  const dateInstance = render(<DateInstance value={value} />);
  expect(dateInstance).toBeTruthy();
});
