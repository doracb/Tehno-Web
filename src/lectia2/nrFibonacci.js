const fibonacci = (n) => {
  if (n < 0) return 'trebuie sa fie un numar natural!';
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0, b = 1, aux;
  for (let i = 2; i <= n; i++) {
    aux = a + b;
    a = b;
    b = aux;
  }
  return b;
};

console.log(fibonacci(process.argv[2]));