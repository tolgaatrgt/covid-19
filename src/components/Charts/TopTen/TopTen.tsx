import React from "react";
import { BarChart, Bar, Tooltip, XAxis, LabelList } from "recharts";
import { Country } from "../../../types";
import { seperator } from "../../../utils";
import emojiFlags from "emoji-flags";
import {
  TopWrap,
  ChartTitle,
  TooltipContainer,
  TooltipTitle,
  TooltipContent,
} from "../styled";

type Props = {
  data: Country[];
};

const TopTen: React.FC<Props> = ({ data }) => {
  const casesList = data.map((country) => {
    return {
      name: country.title,
      code: country.code || "",
      cases: country.total_cases || 0,
    };
  });

  const withFlag = casesList.map((item) => {
    const flag = emojiFlags.data.filter((f) => f.code === item.code);
    if (flag[0]) {
      return {
        ...item,
        flag: flag[0].emoji,
      };
    } else return item;
  });
  const chartData = React.useMemo(() => {
    let sorted = withFlag.sort((a, b) => b.cases - a.cases);
    return sorted.slice(0, 10);
  }, [casesList]);

  const CustomTooltip = ({ active, payload }: any) => {
    if (active) {
      return (
        <TooltipContainer>
          <TooltipTitle>{payload[0].payload.name}</TooltipTitle>
          <TooltipContent>
            {seperator(payload[0].payload.cases)} people affected in total.
          </TooltipContent>
        </TooltipContainer>
      );
    }

    return null;
  };
  return (
    <TopWrap>
      <ChartTitle>Top 10 Most Affected Countries</ChartTitle>
      <BarChart width={1100} height={400} data={chartData}>
        <Tooltip content={CustomTooltip} />
        <Bar dataKey="cases" fill="#8badcd" stroke="#27496e" barSize={70}>
          <LabelList dataKey="flag" position="top" />
        </Bar>
        <XAxis dataKey="code" />
      </BarChart>
    </TopWrap>
  );
};

export default TopTen;
