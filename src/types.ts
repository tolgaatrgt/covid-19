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

export type CountryDate = {
  date: string;
  new_daily_cases: number;
  new_daily_deaths: number;
  total_cases: number;
  total_deaths: number;
  total_recoveries: number;
};

export type Tabs = "Daily" | "Mortality" | "Increment" | "TopTen";

export type Each = {
  name: string;
  id: number;
  code: string;
};

export type DailyData = {
  name: string;
  Avarage: number;
};

export type Compare = {
  code: string;
  date: string;
  new_daily_cases: string;
};
