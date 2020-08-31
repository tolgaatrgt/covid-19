import React from "react";
import { Column, Container, KeyUnit, ValueUnit } from "./styled";
type Props = {
  tableData: any;
};
export const CompareColumns: React.FC<Props> = ({ tableData }) => {
  const renderKeys = () => {
    const [key, c1, c2] = Object.keys(tableData[0]);
    const units = tableData.map((item: any, i: number) => (
      <Column isEven={i % 2 === 0} key={"column" + i}>
        <KeyUnit>{item[key]}</KeyUnit>
        <ValueUnit>{item[c1]}</ValueUnit>
        <ValueUnit>{item[c2]}</ValueUnit>
      </Column>
    ));
    return <>{units}</>;
  };

  return <Container>{renderKeys()}</Container>;
};

export default CompareColumns;
