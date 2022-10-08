import { convertVowels } from "./convertVowels";

export const filterOrderBy = (data, name, count) => {
  let list = [...data];
  list = list?.sort((a, b) => {
    const valueA = convertVowels(a[name]);
    const valueB = convertVowels(b[name]);
    if (count % 2) {
      return valueA > valueB ? 1 : valueA < valueB ? -1 : 0;
    } else {
      return valueA < valueB ? 1 : valueA > valueB ? -1 : 0;
    }
  });
  return list;
};
