import React from "react";
import { CountryDate, Compare } from "../../../types";
import { get60Days } from "../../../utils";
import {
  LineChart,
  Line,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
} from "recharts";
import {
  Wrap,
  ChartTitle,
  TooltipContainer,
  TooltipTitle,
  TooltipContent,
} from "../styled";
import RangeSelect from "../../RangeSelect";
import Table from "../../Table";
import { CompareTable } from "../../Table/CompareTable";

export type Props = {
  data: CountryDate[];
  isTable: boolean;
  compare: string;
  code: string;
};

export const DailyCases: React.FC<Props> = ({
  data,
  isTable,
  compare,
  code,
}) => {
  const [range, setRange] = React.useState(7);
  const [raw, setRaw] = React.useState<Compare[]>([]);

  const calculate = (array: CountryDate[], i: number, range: number) => {
    var spliced = [...array].splice(i, range);
    return spliced.reduce((pv, cv) => pv + Number(cv.new_daily_cases), 0); // error fixed according to the expected solution.
  };

  //  SIMPLE MOVING AVARAGE CALCULATION.
  const SMA = (array: CountryDate[], range: number) => {
    let avgs = [];
    for (var i = 0; i <= array.length - range; i++) {
      avgs.push(Math.floor(calculate(array, i, range) / range));
    }
    return avgs;
  };
  const chartData = () => {
    const compareData = SMA(raw as any, range);
    return SMA(get60Days(data), range).map((item, i) => ({
      name: `Period ${i + 1}`,
      [code]: item,
      ...(compare ? { [compare]: compareData[i] } : null),
    }));
  };

  const onRangeSelect = React.useCallback(
    (r: number) => {
      setRange(r);
    },
    [setRange]
  );

  React.useEffect(() => {
    fetch(`https://api.thevirustracker.com/free-api?countryTimeline=${compare}`)
      .then((response) => response.json())
      .then((data) => {
        const raw = Object.entries(data.timelineitems[0]).map((item: any) => {
          return {
            code: compare,
            date: item[0],
            new_daily_cases: item[1].new_daily_cases,
          };
        });
        let sorted = raw.sort(function (a, b) {
          return +new Date(b.date) - +new Date(a.date);
        });
        setRaw(sorted.slice(0, 60).reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  }, [compare]);

  const CustomTooltip = ({ active, payload }: any) => {
    if (active) {
      return (
        <TooltipContainer>
          <TooltipTitle>{payload[0].payload.name}</TooltipTitle>
          <TooltipContent>
            Avarage of daily cases; {code}: {payload[0].payload[code]}
            {compare && `, ${compare}: ${payload[0].payload[compare]}`}
          </TooltipContent>
        </TooltipContainer>
      );
    }

    return null;
  };
  const renderLineChart = Boolean(chartData().length) ? (
    <div style={{ fontSize: "0.85rem", color: "black" }}>
      <ChartTitle>{range} day SMA of Daily Cases (60 Days)</ChartTitle>
      <LineChart width={1100} height={400} data={chartData()}>
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip content={CustomTooltip} />
        <Legend />
        <Line
          type="monotone"
          dataKey={code}
          stroke="#8badcd"
          strokeWidth="0.188rem"
        />
        {compare && (
          <Line
            type="monotone"
            dataKey={compare}
            stroke="red"
            strokeWidth="0.188rem"
          />
        )}
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
      <RangeSelect range={range} onClick={onRangeSelect} />
    </div>
  ) : (
    <h1 style={{ color: "black" }}>
      Sorry, we can't provide chart for this country
    </h1>
  );

  const renderTableChart = Boolean(chartData().length) ? (
    <>
      <ChartTitle>{range} day SMA of Daily Cases (60 Days)</ChartTitle>
      {compare ? (
        <CompareTable tableData={chartData()} />
      ) : (
        <Table tableData={chartData()} />
      )}
    </>
  ) : (
    <h1 style={{ color: "black" }}>
      Sorry, we can't provide chart for this country
    </h1>
  );

  return <Wrap>{isTable ? renderTableChart : renderLineChart}</Wrap>;
};

export default DailyCases;
