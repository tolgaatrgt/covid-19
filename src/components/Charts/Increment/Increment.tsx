import React from "react";
import { CountryWithDate } from "../../../types";
import { get60Days } from "../../../utils";
import { ChartTitle, Daily } from "../styled";
import {
  LineChart,
  Line,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";

type Props = {
  countryCode: string;
  data: CountryWithDate[];
};

const Increment: React.FC<Props> = ({ countryCode, data }) => {
  const INC = (array: CountryWithDate[]) => {
    let difs: number[] = [];
    for (var i = 1; i < array.length; i++) {
      difs.push(Number(array[i].deaths) - Number(array[i - 1].deaths));
    }
    return difs;
  };

  const chartData = INC(get60Days(countryCode, data)).map((item, i) => ({
    name: `Day ${i + 2}`,
    Change: item,
  }));
  const renderLineChart = Boolean(chartData.length) ? (
    <>
      <ChartTitle>Daily New Deaths Change (60 Days)</ChartTitle>
      <LineChart width={1200} height={400} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="Change"
          stroke="#8badcd"
          strokeWidth="0.188rem"
        />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    </>
  ) : (
    <h1 style={{ color: "black" }}>
      Sorry, we can't provide chart for this country
    </h1>
  );

  return (
    <Daily>
      {Boolean(data.length) ? renderLineChart : <div className="loader" />}
    </Daily>
  );
};

export default Increment;
