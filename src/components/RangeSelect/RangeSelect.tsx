import React from "react";
import { Wrap, RangeDot } from "./styled";

type Props = {
  onClick: (r: number) => void;
  range: number;
};
export const RangeSelect: React.FC<Props> = ({ onClick, range }) => {
  return (
    <Wrap>
      <span>Range:</span>
      <RangeDot isActive={range === 3} onClick={() => onClick(3)}>
        3
      </RangeDot>
      <RangeDot isActive={range === 5} onClick={() => onClick(5)}>
        5
      </RangeDot>
      <RangeDot isActive={range === 7} onClick={() => onClick(7)}>
        7
      </RangeDot>
      <RangeDot isActive={range === 10} onClick={() => onClick(10)}>
        10
      </RangeDot>
      <RangeDot isActive={range === 14} onClick={() => onClick(14)}>
        14
      </RangeDot>
    </Wrap>
  );
};

export default RangeSelect;
