import React from "react";
import { CountryWithDate } from "../../../types";
import { get60Days } from "../../utils";
import {
  LineChart,
  Line,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";
import { Daily, ChartTitle } from "./styled";

export type Props = {
  countryCode: string;
  data: CountryWithDate[];
};

export const DailyCases: React.FC<Props> = ({ countryCode, data }) => {
  const calculate = (array: CountryWithDate[], i: number, range: number) => {
    var spliced = [...array].splice(i, range);
    return spliced.reduce((pv, cv) => pv + Number(cv.cases), 0);
  };

  //  SIMPLE MOVING AVARAGE CALCULATION.
  const SMA = (array: CountryWithDate[], range: number) => {
    let avgs = [];
    for (var i = 0; i <= array.length - range; i++) {
      avgs.push(Math.floor(calculate(array, i, range) / range));
    }
    return avgs;
  };
  const chartData = SMA(get60Days(countryCode, data), 7).map((item, i) => ({
    name: `Week ${i + 1}`,
    Avarage: item,
  }));
  const renderLineChart = Boolean(chartData.length) ? (
    <>
      <ChartTitle>7 day SMA of Daily Cases (60 Days)</ChartTitle>
      <LineChart width={1000} height={400} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="Avarage"
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

export default DailyCases;
