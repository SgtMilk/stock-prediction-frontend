// Copyright (c) 2022 Alix Routhier-Lalonde. Licence included in root of package.

import { Stocks, StorybookDecorator } from "data";
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
  const stocks: Stocks.Stock[] = [
    {
      id: 1,
      name: "AMZN",
      interval: 3,
      num_days: 3,
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
      name: "AAPL",
      interval: 3,
      num_days: 3,
    },
    {
      id: 3,
      name: "AAPL",
      interval: 3,
      num_days: 3,
    },
  ];
  dispatch(Stocks.actions.setStocks(stocks));
  return <Portfolio stockIds={["1", "2", "3"]} openAddStock={() => {}} />;
};
