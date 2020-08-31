import React from "react";
import { Wrap, D, M, I, T } from "./styled";
import { Tabs } from "../../types";
type Props = {
  onDaily(): void;
  onMortality(): void;
  onIncrement(): void;
  onTopTen(): void;
  Tab: Tabs;
};

const TabPicker: React.FC<Props> = ({
  onDaily,
  onMortality,
  onIncrement,
  onTopTen,
  Tab,
}) => {
  return (
    <Wrap>
      <D Tab={Tab} onClick={onDaily}>
        Daily Cases
      </D>
      <M Tab={Tab} onClick={onMortality}>
        Mortality Rate
      </M>

      <I Tab={Tab} onClick={onIncrement}>
        Death Increment
      </I>
      <T Tab={Tab} onClick={onTopTen}>
        Top 10 Countries
      </T>
    </Wrap>
  );
};

export default TabPicker;
