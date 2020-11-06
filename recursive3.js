function mat(number) {
  if (number === 1) {
    return 3;
  } else {
    return 2 * mat(number - 1);
  }
}
console.log(mat(4));