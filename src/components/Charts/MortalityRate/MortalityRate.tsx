import React from "react";
import { CountryWithDate } from "../../../types";
import { get60Days } from "../../utils";

import { ChartTitle, Daily } from "../DailyCases/styled";
import { BarChart, Bar, Tooltip, CartesianGrid, XAxis, YAxis } from "recharts";

type Props = {
  countryCode: string;
  data: CountryWithDate[];
};

const MortalityRate: React.FC<Props> = ({ countryCode, data }) => {
  const calculate = (array: CountryWithDate[], i: number, range: number) => {
    var spliced = [...array].splice(i, range);
    var totalDeath = spliced.reduce((pv, cv) => pv + Number(cv.deaths), 0);
    var totalCases = spliced.reduce((pv, cv) => pv + Number(cv.cases), 0);

    return ((totalDeath * 100) / totalCases).toFixed(2);
  };

  const MR = (array: CountryWithDate[], range: number) => {
    let avgs = [];
    for (var i = 0; i <= array.length - range; i++) {
      avgs.push(calculate(array, i, range));
    }
    return avgs;
  };
  const chartData = MR(get60Days(countryCode, data), 3).map((item, i) => ({
    name: `Day ${i + 1}-${i + 3}`,
    Percentage: item,
  }));
  const renderLineChart = Boolean(chartData.length) ? (
    <>
      <ChartTitle>3 day SMA of Mortality Percentage (60 Days)</ChartTitle>
      <BarChart width={1200} height={400} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Bar dataKey="Percentage" fill="#8badcd" stroke="#27496e" barSize={7} />
        <XAxis dataKey="name" />
        <YAxis />
      </BarChart>
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

export default MortalityRate;
