const mathFactorial = (value) => {
  if (value === 0 || value === 1) {
    return 1;
  }
  let result = 1;
  for (let i = value; i > 1; i--) {
    result *= i;
  }
  return result;
};

// Math Factorial from 5
let hopeFactorial = 5;
const resultFactorial1 = mathFactorial(hopeFactorial);
console.log(`factorial from ${hopeFactorial}: ${resultFactorial1}`);

// Math Factorial from 3
hopeFactorial = 3;
const resultFactorial2 = mathFactorial(hopeFactorial);
console.log(`factorial from ${hopeFactorial}: ${resultFactorial2}`);
