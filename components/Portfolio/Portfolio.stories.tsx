import { Stocks, StorybookDecorator } from "../../data";
import React from "react";
import { Portfolio } from "./Portfolio";
import { useDispatch } from "react-redux";

export default {
  title: "Page Components/Portfolio",
  component: Portfolio,
  decorators: [StorybookDecorator],
};

export const Default = () => {
  const dispatch = useDispatch();
  const stocks = [
    {
      id: 1,
      name: "AMZN - Weekly",
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
    },
    {
      id: 2,
      name: "AAPL - Monthly",
    },
    {
      id: 3,
      name: "AAPL - Monthly",
    },
  ];
  dispatch(Stocks.actions.setStocks(stocks));
  return <Portfolio stockIds={[1, 2, 3]} />;
};
