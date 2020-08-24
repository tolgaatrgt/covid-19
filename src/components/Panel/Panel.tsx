import React from "react";
import Statistics from "../Statistics";
import DailyCases from "../Charts/DailyCases";
import Increment from "../Charts/Increment";
import TabPicker from "../TabPicker";
import MortalityRate from "../Charts/MortalityRate";
import { Info, ChartWrap } from "../../styled";
import { Country, Tabs } from "../../types";
import { COUNTRY_ALL_TIME } from "../../constants";
type Props = {
  data: Country;
  isSelect: boolean;
  code: string;
};

export const Panel: React.FC<Props> = ({ data, isSelect, code }) => {
  React.useEffect(() => {
    fetch(COUNTRY_ALL_TIME)
      .then((response) => response.json())
      .then((data) => {
        setAlltime(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [selectedTab, setSelectedTab] = React.useState<Tabs>("Daily");
  const [alltime, setAlltime] = React.useState([]);

  const onDaily = React.useCallback(() => {
    setSelectedTab("Daily");
  }, [setSelectedTab]);

  const onMortality = React.useCallback(() => {
    setSelectedTab("Mortality");
  }, [setSelectedTab]);

  const onIncrement = React.useCallback(() => {
    setSelectedTab("Increment");
  }, [setSelectedTab]);

  return (
    <Info>
      {isSelect && (
        <>
          <Statistics data={data} />
          <ChartWrap>
            {
              {
                Daily: <DailyCases countryCode={code} data={alltime} />,
                Mortality: <MortalityRate countryCode={code} data={alltime} />,
                Increment: <Increment countryCode={code} data={alltime} />,
              }[selectedTab]
            }
            <TabPicker
              Tab={selectedTab}
              onDaily={onDaily}
              onMortality={onMortality}
              onIncrement={onIncrement}
            />
          </ChartWrap>
        </>
      )}
    </Info>
  );
};
export default Panel;
