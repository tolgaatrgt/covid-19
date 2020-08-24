import React from "react";
import { ListContainer, ListItem } from "./styled";
import { Each } from "../../types";
type Props = {
  countries: Each[];
  onClick: (arg: number) => void;
  isVisible: boolean;
};
export const CountryList: React.FC<Props> = ({
  countries,
  onClick,
  isVisible,
}) => {
  const renderList = (array: Each[]) =>
    array.map((item, i) => (
      <ListItem onClick={() => onClick(item.id)} key={i}>
        {item.name}
      </ListItem>
    ));
  return (
    <ListContainer isVisible={isVisible}>{renderList(countries)}</ListContainer>
  );
};
export default CountryList;
