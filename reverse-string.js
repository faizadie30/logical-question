const reverseValue = (value) => {
  return value.split("").reverse().join("");
};

const text = "EDOCATNEP LATIGID";
console.log("reverse From:", `${text}`, "result:", reverseValue(text));
