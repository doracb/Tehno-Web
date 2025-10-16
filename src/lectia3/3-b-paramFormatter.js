const formatString = (s, values) => {
  let result = s;
  for (let key in values) {
    result = result.replace("{" + key + "}", values[key]);
  }
  return result;
};

console.log(formatString("un {substantiv} este {adjectiv}",
  { substantiv: "căluț", adjectiv: "drăguț" }));