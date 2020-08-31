import React from "react";
import { CountryDate } from "../../../types";
import { get60Days } from "../../../utils";
import RangeSelect from "../../RangeSelect";
import {
  ChartTitle,
  Wrap,
  TooltipContainer,
  TooltipTitle,
  TooltipContent,
} from "../styled";
import {
  BarChart,
  Bar,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
  LineChart,
  Line,
} from "recharts";
import Table from "../../Table";

type Props = {
  data: CountryDate[];
  isTable: boolean;
};

const MortalityRate: React.FC<Props> = ({ data, isTable }) => {
  const [range, setRange] = React.useState(3);

  const calculate = (array: CountryDate[], i: number, range: number) => {
    const spliced = [...array].splice(i, range);
    const totalDeath = spliced.reduce(
      (pv, cv) => pv + Number(Math.abs(cv.new_daily_deaths)),
      0
    );
    const totalCases = spliced.reduce(
      (pv, cv) => pv + Number(Math.abs(cv.new_daily_cases)),
      0
    );
    return Number(((totalDeath * 100) / totalCases).toFixed(2));
  };

  const MR = (array: CountryDate[], range: number) => {
    let avgs = [];
    for (var i = 0; i <= array.length - range; i++) {
      avgs.push(calculate(array, i, range));
    }
    return avgs;
  };

  const chartData = React.useMemo(
    () =>
      MR(get60Days(data), range).map((item, i) => ({
        name: `Day ${i + 1}-${i + range}`,
        Percentage: item || 0,
      })),
    [data, range]
  );

  const onRangeSelect = React.useCallback(
    (r: number) => {
      setRange(r);
    },
    [setRange]
  );

  const CustomTooltip = ({ active, payload }: any) => {
    if (active) {
      return (
        <TooltipContainer>
          <TooltipTitle>{payload[0].payload.name}</TooltipTitle>
          <TooltipContent>
            Mortality rate is {payload[0].payload.Percentage}
          </TooltipContent>
        </TooltipContainer>
      );
    }

    return null;
  };

  const renderLineChart = Boolean(chartData.length) ? (
    <>
      <ChartTitle>{range} day SMA of Mortality Percentage (60 Days)</ChartTitle>
      <LineChart width={1100} height={400} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip content={CustomTooltip} />
        <Line
          type="monotone"
          dataKey="Percentage"
          stroke="#8badcd"
          strokeWidth="0.188rem"
        />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
      <RangeSelect range={range} onClick={onRangeSelect} />
    </>
  ) : (
    <h1 style={{ color: "black" }}>
      Sorry, we can't provide chart for this country
    </h1>
  );

  const renderTableChart = Boolean(chartData.length) ? (
    <>
      <ChartTitle>{range} day SMA of Mortality Percentage (60 Days)</ChartTitle>
      <Table tableData={chartData} />
    </>
  ) : (
    <h1 style={{ color: "black" }}>
      Sorry, we can't provide chart for this country
    </h1>
  );

  return <Wrap>{isTable ? renderTableChart : renderLineChart}</Wrap>;
};

export default MortalityRate;
