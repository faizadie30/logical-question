const shape = (condition) => {
  const size = 5;

  if (condition === "arrow") {
    for (let i = 0; i < size; i++) {
      console.log(" ".repeat(i) + "***");
    }
    for (let i = size - 2; i >= 0; i--) {
      console.log(" ".repeat(i) + "***");
    }
  }

  if (condition === "cross") {
    for (let i = 0; i < size; i++) {
      let row = "";
      for (let j = 0; j < size; j++) {
        if (i === j || i + j === size - 1) {
          row += "*";
        } else {
          row += " ";
        }
      }
      console.log(row);
    }
  }
};

console.log("arrow:");
console.log("\n");
shape("arrow");
console.log("cross:");
console.log("\n");
shape("cross");
