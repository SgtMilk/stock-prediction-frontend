// Copyright (c) 2022 Alix Routhier-Lalonde. Licence included in root of package.

import React, { FC, ReactElement } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, Stocks } from "data";
import { StockView, StockViewProps } from "./StockView";
import { deleteStock } from "backendCalls";

export interface ConnectedStockViewProps {
  stockId: string;
  mode: number;
}

/**
 * Connected to state version of the StockView component
 * @param stockId (number, the stock id to get it from the state)
 * @param mode (the number of stocks displayed on screen)
 * @constructor
 */
export const ConnectedStockView: FC<ConnectedStockViewProps> = ({
  stockId,
  mode,
}): ReactElement => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state);
  const stock = Stocks.selectors.selectById(state, stockId);

  if (stock) {
    let stockMode;
    switch (stock.interval) {
      case 1:
        stockMode = "Daily";
        break;
      case 5:
        stockMode = "Weekly";
        break;
      case 22:
        stockMode = "Monthly";
        break;
      default:
        stockMode = `${stock.interval} days`;
        break;
    }
    const props: StockViewProps = {
      name: `${stock.name} - interval: ${stock.num_days} - length: ${stockMode}`,
      graphData: stock.graphData,
      mode,
      unpin: () => deleteStock(stockId, state, dispatch),
    };
    return <StockView {...props} />;
  } else return <div />;
};
