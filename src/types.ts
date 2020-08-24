export type Country = {
  code: string;
  ourid: number;
  source: string;
  title: string;
  total_active_cases: number;
  total_cases: number;
  total_deaths: number;
  total_new_cases_today: number;
  total_new_deaths_today: number;
  total_recovered: number;
  total_serious_cases: number;
  total_unresolved: number;
};

export type CountryWithDate = {
  cases: string;
  countrycode: string;
  date: string;
  deaths: string;
  recovered: string;
};

export type Tabs = "Daily" | "Mortality" | "Increment";

export type Each = {
  name: string;
  id: number;
};
