import React from "react";
import { Column, Container, KeyUnit, ValueUnit } from "./styled";
type Props = {
  tableData: any;
};
export const Columns: React.FC<Props> = ({ tableData }) => {
  const renderKeys = () => {
    const [key, value] = Object.keys(tableData[0]);

    const units = tableData.map((item: any, i: number) => (
      <Column isEven={i % 2 === 0} key={"column" + i}>
        <KeyUnit>{item[key]}</KeyUnit>
        <ValueUnit>{item[value]}</ValueUnit>
      </Column>
    ));
    return <>{units}</>;
  };

  return <Container>{renderKeys()}</Container>;
};

export default Columns;
