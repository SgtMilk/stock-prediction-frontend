import React from "react";
import { Story } from "@storybook/react";
import { StockView, StockViewProps } from "./StockView";
import { ConnectedStockView } from "./ConnectedStockView";
import { useDispatch, Provider } from "react-redux";
import { Stocks, StorybookDecorator } from "../../data";

export default {
  title: "Page Components/StockView",
  component: StockView,
  decorators: [StorybookDecorator],
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

export const Connected = () => {
  const dispatch = useDispatch();
  const stock = {
    id: 1,
    name: "AMZN",
    mode: 5,
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
  dispatch(Stocks.actions.addStock(stock));
  return <ConnectedStockView mode={4} stockId={1} />;
};
