import React from "react";
import { Wrap, D, M, I } from "./styled";
import { Tabs } from "../../types";
type Props = {
  onDaily(): void;
  onMortality(): void;
  onIncrement(): void;
  Tab: Tabs;
};

const TabPicker: React.FC<Props> = ({
  onDaily,
  onMortality,
  onIncrement,
  Tab,
}) => {
  return (
    <Wrap>
      <D Tab={Tab} onClick={onDaily}>
        Daily Cases
      </D>
      <M Tab={Tab} onClick={onMortality}>
        Mortality Percentage
      </M>
      <I Tab={Tab} onClick={onIncrement}>
        Death Increment
      </I>
    </Wrap>
  );
};

export default TabPicker;
