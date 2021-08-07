import React from "react";
import { render } from "@testing-library/react";
import { StringInstance } from "./StringInstance";

const value: string = "String";

test("renders StringInstance component", () => {
  const stringInstance = render(<StringInstance value={value} />);
  expect(stringInstance).toBeTruthy();
});
