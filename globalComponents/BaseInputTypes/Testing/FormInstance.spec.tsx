import React, { useState } from "react";
import { render, screen } from "@testing-library/react";
import { TestComponent } from "./TestComponent";

test("renders learn react link", () => {
  const formInstance = render(<TestComponent />);
  expect(formInstance).toBeTruthy();
  expect(screen.getAllByTestId("BooleanInput")).toHaveLength(1);
  expect(screen.getAllByTestId("DateInput")).toHaveLength(1);
  expect(screen.getAllByTestId("EmailInput")).toHaveLength(1);
  expect(screen.getAllByTestId("NumberInput")).toHaveLength(1);
  expect(screen.getAllByTestId("PasswordInput")).toHaveLength(2);
  expect(screen.getAllByTestId("StringInput")).toHaveLength(1);
});
