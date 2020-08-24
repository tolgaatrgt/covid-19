import React from "react";
import { Wrap, BoardWrap, BoardUnit, UnitTitle, NameUnit } from "./styled";
import { Country } from "../../types";
type Props = {
  data: Country;
};
export const Statistics: React.FC<Props> = ({ data }) => {
  const seperator = (number?: number) => {
    return number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <Wrap>
      <BoardWrap>
        <NameUnit>{data.title}</NameUnit>
        <BoardUnit>
          <UnitTitle>Total Cases</UnitTitle>
          <span>{seperator(data.total_cases)}</span>
        </BoardUnit>
        <BoardUnit>
          <UnitTitle>Total Deaths</UnitTitle>
          <span>{seperator(data.total_deaths)}</span>
        </BoardUnit>
        <BoardUnit>
          <UnitTitle>New Cases Today</UnitTitle>
          <span>{seperator(data.total_new_cases_today)}</span>
        </BoardUnit>
        <BoardUnit>
          <UnitTitle>New Deaths Today</UnitTitle>
          <span>{seperator(data.total_new_deaths_today)}</span>
        </BoardUnit>
        <BoardUnit>
          <UnitTitle green>Recovered</UnitTitle>
          <span>{seperator(data.total_recovered)}</span>
        </BoardUnit>
      </BoardWrap>
    </Wrap>
  );
};

export default Statistics;
