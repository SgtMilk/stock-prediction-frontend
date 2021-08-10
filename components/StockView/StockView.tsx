import React, { FC, ReactElement, useState } from "react";
import { Display, Button } from "../../globalComponents";
import { objectCSS, functionCSS } from "./stylesheet";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export interface StockViewProps {
  name: string;
  graphData?: Array<{
    date: string;
    price: number;
  }>;
  mode: number;
  unpin: () => void;
}

/**
 * This component will show a graph of a stock given data.
 * It will expand when clicked on and un-expand when clicking the back arrow.
 * If this component doesn't receive graph data, it will be in a loading state.
 * When expanded, there will be a button to unpin this stock of the view.
 * @param name (string, the name of the component)
 * @param graphData (optional, the data to bne plotted in a graph)
 * @param mode (the number of stocks on a screen)
 * @param unpin (callback to unpin a stock of the selection)
 * @constructor
 */
export const StockView: FC<StockViewProps> = ({
  name,
  graphData,
  mode,
  unpin,
}): ReactElement => {
  const [expanded, setExpanded] = useState<boolean>(false);

  if (!Array.isArray(graphData)) graphData = undefined;

  const renderGraph = graphData ? (
    <ResponsiveContainer height="100%" width="100%">
      <LineChart
        data={graphData}
        margin={{
          right: 25,
          bottom: 20,
        }}
      >
        <Line type="monotone" dataKey="price" stroke="#FFFFFF" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="date" stroke="#FFFFFF" />
        <YAxis stroke="#FFFFFF" domain={["auto", "auto"]} />
        <Tooltip
          payload={[{ name: "05-01", value: 12, unit: "kg" }]}
          itemStyle={{ color: "black" }}
        />
      </LineChart>
    </ResponsiveContainer>
  ) : null;

  return (
    <div
      onClick={expanded ? undefined : () => setExpanded(true)}
      style={functionCSS.box(expanded, mode)}
    >
      <div style={functionCSS.titleBox(expanded)}>
        {expanded ? (
          <Button onClick={() => setExpanded(false)} style={objectCSS.button}>
            <ArrowBackIcon />
          </Button>
        ) : null}
        <Display.Delegate.Delegate
          value={name}
          style={functionCSS.title(expanded, mode)}
        />
        {expanded ? (
          <Button onClick={unpin} style={objectCSS.button}>
            {"Unpin"}
          </Button>
        ) : null}
      </div>
      <div style={objectCSS.graphBox}>
        {graphData ? (
          renderGraph
        ) : (
          <Display.String.StringInstance
            value={"Loading..."}
            style={functionCSS.text(expanded, mode)}
          />
        )}
      </div>
    </div>
  );
};
