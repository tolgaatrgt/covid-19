import { CountryDate } from "./types";

export const get60Days = (data: CountryDate[]) => {
  const now = new Date();
  const first = new Date();
  const ago = now.getMonth() - 2;

  first.setMonth(ago);
  const last60Days: CountryDate[] = [];
  data.map((item) => {
    const end = new Date(item.date);
    if (end > first && end < now) {
      last60Days.push(item);
    }
  });

  const sortedDates = (array: CountryDate[]) =>
    array.sort(function (a, b) {
      return +new Date(a.date) - +new Date(b.date);
    });

  return sortedDates(last60Days);
};

export const seperator = (number: number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
