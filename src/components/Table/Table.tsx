import React from "react";
import { Column, Unit, Wrap } from "./styled";

import Columns from "./Columns";
type Props = {
  tableData: any;
};
export const Table: React.FC<Props> = ({ tableData }) => {
  const [key, value] = Object.keys(tableData[0]);

  return (
    <Wrap>
      <Column>
        <Unit>DAYS</Unit>
        <Unit>{value.toUpperCase()}</Unit>
      </Column>
      <Columns tableData={tableData} />
    </Wrap>
  );
};

export default Table;
