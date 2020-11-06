function genap(number) {
  if (number === 0) {
    return 0;
  } else if (number % 2 === 0) {
    console.log(number);
    return genap(number - 1);
  } else {
    return genap(number - 1);
  }
}
console.log(genap(10));