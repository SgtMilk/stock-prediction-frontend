import React from "react";
import { Button } from "./Button";

export default {
  title: "Global Components/Button",
  component: Button,
};

export const ArrayDelegate = () => {
  return (
    <Button size={1} onClick={() => {}}>
      Submit
    </Button>
  );
};
