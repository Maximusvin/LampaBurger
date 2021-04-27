export const projection = rules => {
  const keys = Object.keys(rules);

  return obj =>
    keys.reduce((newObj, key) => {
      newObj[key] = rules[key].reduce(
        (val, fn, i) => (i ? fn(val) : obj[fn]),
        null,
      );
      return newObj;
    }, {});
};
