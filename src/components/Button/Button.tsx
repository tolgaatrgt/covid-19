import React from "react";
import { StyledButton, ButtonImage } from "./styled";
import chart from "../../img/chart.svg";
import table from "../../img/table.svg";

type Props = {
  onChange: () => void;
  isTable: boolean;
  disable: boolean;
};

const Button: React.FC<Props> = ({ onChange, isTable, disable }) => {
  return (
    <StyledButton disable={disable} onClick={onChange}>
      <ButtonImage src={isTable ? chart : table} />
      {isTable ? "Graph" : "Table"}
    </StyledButton>
  );
};

export default Button;
