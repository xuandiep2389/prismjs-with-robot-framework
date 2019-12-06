module.exports = function checkStr(string) {
  if (typeof string !== "string") throw new TypeError("checkStr wants a string!");
  return string.replace(/\s/g, "");
};
