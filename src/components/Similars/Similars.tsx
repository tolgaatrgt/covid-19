import React from "react";
import compare from "../../img/compare.svg";
import { Country } from "../../types";
import { Wrap, Unit, Title, Icon, Name } from "./styled";
import { seperator } from "../../utils";

type Props = {
  code: string;
  countries: Country[];
  onWidgetItem: (code: string) => void;
  onCompare: (code: string) => void;
  isVisible: boolean;
};

export const Similars: React.FC<Props> = ({
  code,
  countries,
  onWidgetItem,
  onCompare,
  isVisible,
}) => {
  const current = countries.filter((item) => item.code === code);
  const getMostSimilars = (code: string, countries: Country[]) => {
    const result = countries
      .filter((item) => item.code !== code)
      .map((item) => {
        return {
          code: item.code,
          name: item.title,
          cases: item.total_cases,
        };
      })
      .sort(
        (a, b) =>
          Math.abs(a.cases - current[0].total_cases) -
          Math.abs(b.cases - current[0].total_cases)
      )
      .slice(0, 10);

    return result.map((item, i) => (
      <Unit>
        <Name onClick={() => onWidgetItem(item.code)} key={item.code}>
          {i + 1}- {item.name} ({seperator(item.cases)})
        </Name>
        <Icon
          isVisible={isVisible}
          onClick={() => onCompare(item.code)}
          src={compare}
        />
      </Unit>
    ));
  };

  return (
    <Wrap isShow={Boolean(current[0].total_cases)}>
      <Title>
        10 Countries with the most similar total number of cases to{" "}
        {current[0].title}
      </Title>
      {getMostSimilars(code, countries)}
    </Wrap>
  );
};

export default Similars;
