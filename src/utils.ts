import { CountryWithDate } from "./types";

export const get60Days = (code: string, data: CountryWithDate[]) => {
  const now = new Date();
  const first = new Date();
  const ago = now.getMonth() - 2;

  first.setMonth(ago);
  const last60Days: CountryWithDate[] = [];
  data
    .filter((item) => item.countrycode === code)
    .map((item) => {
      const end = new Date(item.date);
      if (end > first && end < now) {
        last60Days.push(item);
      }
    });

  const sortedDates = (array: CountryWithDate[]) =>
    array.sort(function (a, b) {
      return +new Date(a.date) - +new Date(b.date);
    });

  return sortedDates(last60Days);
};
