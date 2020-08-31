import React from "react";
import { Column, Unit, Wrap } from "./styled";
import CompareColumns from "./CompareColumns";
type Props = {
  tableData: any;
};
export const CompareTable: React.FC<Props> = ({ tableData }) => {
  const [key, c1, c2] = Object.keys(tableData[0]);

  return (
    <Wrap>
      <Column>
        <Unit />
        <Unit>{c1.toUpperCase()}</Unit>
        <Unit>{c2.toUpperCase()}</Unit>
      </Column>
      <CompareColumns tableData={tableData} />
    </Wrap>
  );
};

export default CompareTable;
