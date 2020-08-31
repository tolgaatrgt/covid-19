import React from "react";
import { CountryDate } from "../../../types";
import { get60Days } from "../../../utils";
import {
  ChartTitle,
  Wrap,
  TooltipContainer,
  TooltipContent,
  TooltipTitle,
} from "../styled";
import {
  BarChart,
  Bar,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
  ReferenceLine,
} from "recharts";
import Table from "../../Table";

type Props = {
  data: CountryDate[];
  isTable: boolean;
};

const Increment: React.FC<Props> = ({ data, isTable }) => {
  const INC = (array: CountryDate[]) => {
    let difs: number[] = [];
    for (var i = 1; i < array.length; i++) {
      difs.push(
        Number(array[i].new_daily_deaths) -
          Number(array[i - 1].new_daily_deaths)
      );
    }
    return difs;
  };

  const chartData = React.useMemo(
    () =>
      INC(get60Days(data)).map((item, i) => ({
        name: `Day ${i + 2}`,
        Change: item,
      })),
    [data]
  );
  const CustomTooltip = ({ active, payload }: any) => {
    if (active) {
      return (
        <TooltipContainer>
          <TooltipTitle>{payload[0].payload.name}</TooltipTitle>
          <TooltipContent>
            Death count is{" "}
            {payload[0].payload.Change < 0
              ? `decreased by ${Math.abs(payload[0].payload.Change)}`
              : `increased by ${payload[0].payload.Change}`}
          </TooltipContent>
        </TooltipContainer>
      );
    }

    return null;
  };

  const renderLineChart = Boolean(chartData.length) ? (
    <>
      <ChartTitle>Daily New Deaths Change (60 Days)</ChartTitle>
      <BarChart width={1100} height={400} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip content={CustomTooltip} />
        <Bar dataKey="Change" fill="#8badcd" stroke="#27496e" barSize={7} />
        <XAxis dataKey="name" />
        <YAxis />
        <ReferenceLine y={0} stroke="#000" />
      </BarChart>
    </>
  ) : (
    <h1 style={{ color: "black" }}>
      Sorry, we can't provide chart for this country
    </h1>
  );

  const renderTableChart = Boolean(chartData.length) ? (
    <>
      <ChartTitle>Daily New Deaths Change (60 Days)</ChartTitle>
      <Table tableData={chartData} />
    </>
  ) : (
    <h1 style={{ color: "black" }}>
      Sorry, we can't provide chart for this country
    </h1>
  );

  return <Wrap>{isTable ? renderTableChart : renderLineChart}</Wrap>;
};

export default Increment;
