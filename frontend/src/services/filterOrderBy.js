export const filterOrderBy = (data, name, count) => {
  let list = [...data];
  list = list?.sort((a, b) => {
    return count % 2
      ? a[name] > b[name]
        ? 1
        : a[name] < b[name]
        ? -1
        : 0
      : a[name] < b[name]
      ? 1
      : a[name] > b[name]
      ? -1
      : 0;
  });
  return list;
};
