import React, { FC, ReactElement } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, Stocks } from "../../data";
import { StockView, StockViewProps } from "./StockView";

export interface ConnectedStockViewProps {
  stockId: number;
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
  const stock = useSelector((state: RootState) =>
    Stocks.selectors.selectById(state, stockId)
  );

  console.log(stock);

  if (stock) {
    let stockMode;
    switch (stock.mode) {
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
        stockMode = `${stock.mode} days`;
        break;
    }
    const props: StockViewProps = {
      name: `${stock.name} - ${stockMode}`,
      graphData: stock.graphData,
      mode,
      unpin: () => dispatch(Stocks.actions.removeStock(stockId)),
    };
    return <StockView {...props} />;
  } else return <div />;
};
