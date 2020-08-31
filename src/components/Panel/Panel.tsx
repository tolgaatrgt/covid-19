import React from "react";
import Statistics from "../Statistics";
import DailyCases from "../Charts/DailyCases";
import Increment from "../Charts/DeathIncrement";
import TabPicker from "../TabPicker";
import MortalityRate from "../Charts/MortalityRate";
import { Info, ChartWrap } from "../../styled";
import { LeftWrap, Container, InnerContainer } from "./styled";
import { Country, Tabs, CountryDate } from "../../types";
import TopTen from "../Charts/TopTen";
import Button from "../Button";
import Similars from "../Similars";

type Props = {
  data: Country;
  isSelect: boolean;
  code: string;
  countries: Country[];
  onWidgetItem: (code: string) => void;
};

export const Panel: React.FC<Props> = ({
  data,
  isSelect,
  code,
  countries,
  onWidgetItem,
}) => {
  const [selectedTab, setSelectedTab] = React.useState<Tabs>("Daily");
  const [alltime, setAlltime] = React.useState<CountryDate[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isTable, setIsTable] = React.useState(false);
  const [compare, setCompare] = React.useState("");

  React.useEffect(() => {
    setSelectedTab("Daily");
    setIsLoading(true);
    fetch(`https://api.thevirustracker.com/free-api?countryTimeline=${code}`)
      .then((response) => response.json())
      .then((data) => {
        const all = Object.entries(data.timelineitems[0]).map((item: any) => {
          return {
            date: item[0],
            new_daily_cases: item[1].new_daily_cases,
            new_daily_deaths: item[1].new_daily_deaths,
            total_cases: item[1].total_cases,
            total_deaths: item[1].total_deaths,
            total_recoveries: item[1].total_recoveries,
          };
        });
        setAlltime(all);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [code]);

  React.useEffect(() => {
    setIsTable(false);
  }, [selectedTab]);

  const onDaily = React.useCallback(() => {
    setSelectedTab("Daily");
  }, [setSelectedTab]);

  const onMortality = React.useCallback(() => {
    setSelectedTab("Mortality");
  }, [setSelectedTab]);

  const onIncrement = React.useCallback(() => {
    setSelectedTab("Increment");
  }, [setSelectedTab]);

  const onTopTen = React.useCallback(() => {
    setSelectedTab("TopTen");
  }, [setSelectedTab]);

  const onCompare = React.useCallback(
    (code: string) => {
      setCompare(code);
    },
    [setCompare]
  );
  return (
    <Info>
      {isSelect && (
        <>
          <Statistics data={data} />
          <Container>
            {isLoading ? (
              <div className="loader" />
            ) : (
              <InnerContainer>
                <LeftWrap isActive={Boolean(alltime.length - 1)}>
                  <Similars
                    isVisible={selectedTab === "Daily"}
                    onCompare={onCompare}
                    onWidgetItem={onWidgetItem}
                    code={code}
                    countries={countries}
                  />
                  <Button
                    disable={selectedTab === "TopTen"}
                    isTable={isTable}
                    onChange={() => setIsTable(!isTable)}
                  />
                </LeftWrap>
                <ChartWrap>
                  {
                    {
                      Daily: (
                        <DailyCases
                          code={code}
                          compare={compare}
                          isTable={isTable}
                          data={alltime}
                        />
                      ),
                      Mortality: (
                        <MortalityRate isTable={isTable} data={alltime} />
                      ),
                      Increment: <Increment isTable={isTable} data={alltime} />,
                      TopTen: <TopTen data={countries} />,
                    }[selectedTab]
                  }
                  <TabPicker
                    Tab={selectedTab}
                    onDaily={onDaily}
                    onMortality={onMortality}
                    onIncrement={onIncrement}
                    onTopTen={onTopTen}
                  />
                </ChartWrap>
              </InnerContainer>
            )}
          </Container>
        </>
      )}
    </Info>
  );
};
export default Panel;
