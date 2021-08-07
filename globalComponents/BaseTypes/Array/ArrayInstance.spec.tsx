import React from "react";
import { render, screen } from "@testing-library/react";
import ArrayInstance from "./ArrayInstance";

const value: Array<any> = [
  [1, 2, 3],
  "beep",
  3,
  {
    a: "a",
    b: 3,
    c: [],
  },
];

test("renders learn react link", () => {
  const arrayInstance = render(<ArrayInstance value={value} />);
  expect(arrayInstance).toBeTruthy();
});
