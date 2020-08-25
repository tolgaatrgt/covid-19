import React from "react";
import { COUNTRY_TOTALS } from "./constants";
import Header from "./components/Header";
import Panel from "./components/Panel";
import { Country, Each } from "./types";
import { AppContainer, InnerContainer, Please } from "./styled";
import "./App.css";
import CountryList from "./components/CountryList";

function App() {
  const [countries, setCountries] = React.useState<Country[]>([]);
  const [item, setItem] = React.useState<Country>();
  React.useEffect(() => {
    fetch(COUNTRY_TOTALS)
      .then((response) => response.json())
      .then((data) => {
        setCountries(Object.values(data["countryitems"][0]));
      })
      .catch(console.error);
  }, []);

  const List: Each[] = React.useMemo(
    () =>
      countries.map((country) => {
        return {
          name: country.title,
          id: country.ourid,
        };
      }),
    [countries]
  );
  const changeSelected = (id: number) => {
    const selection = countries.filter((item) => item.ourid === id);
    setItem(selection[0]);
  };

  return (
    <AppContainer>
      <Header />
      <InnerContainer>
        <CountryList
          isVisible={Boolean(countries.length)}
          countries={List}
          onClick={changeSelected}
        />
        {item && (
          <Panel data={item} isSelect={Boolean(item)} code={item.code} />
        )}
        <Please isVisible={Boolean(countries.length) && !Boolean(item)}>
          Please select a country for statistics.
        </Please>
      </InnerContainer>
    </AppContainer>
  );
}

export default App;
