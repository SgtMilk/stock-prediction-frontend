import React from "react";
import { StockView, StockViewProps } from "./StockView";

export default {
  title: "Page Components/StockView",
  component: StockView,
};

export const Loading = () => {
  const props: StockViewProps = {
    name: "AMZN - Monthly",
    mode: 4,
    unpin: () => {},
  };
  return <StockView {...props} />;
};

export const Graph = () => {
  const props: StockViewProps = {
    name: "AMZN - Weekly",
    mode: 4,
    unpin: () => {},
    graphData: [
      {
        date: "2021-07-27",
        price: 30.947,
      },
      {
        date: "2021-07-28",
        price: 30.86,
      },
      {
        date: "2021-07-29",
        price: 31.002,
      },
      {
        date: "2021-07-30",
        price: 30.86,
      },
      {
        date: "2021-08-03",
        price: 30.832,
      },
    ],
  };
  return <StockView {...props} />;
};
