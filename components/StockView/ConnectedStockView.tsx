import React, { FC, ReactElement } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, Stocks } from "../../data";
import { StockView, StockViewProps } from "./StockView";

export interface ConnectedStockViewProps {
  stockId: number;
  mode: number;
}

export const ConnectedStockView: FC<ConnectedStockViewProps> = ({
  stockId,
  mode,
}): ReactElement => {
  const dispatch = useDispatch();
  const stock = useSelector((state: RootState) =>
    Stocks.selectors.selectById(state, stockId)
  );

  if (stock) {
    const props: StockViewProps = {
      name: stock.name,
      graphData: stock.graphData,
      mode,
      unpin: () => dispatch(Stocks.actions.removeStock(stockId)),
    };
    return <StockView {...props} />;
  } else return <div />;
};
