function fibonacci(num) {
  if (num === 1) return 0;
  if (num === 2) return 1;

  let a = 0, b = 1, c;
  for (let i = 3; i <= num; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return b;
}

function findFibonacci() {
  const input = document.getElementById('fibInput').value.trim();
  const n = parseInt(input, 10);

  const resultElement = document.getElementById('result');

  if (isNaN(n) || n < 1 || n > 50) {
    resultElement.textContent = "Please enter a number between 1 and 50.";
  } else {
    const fibNumber = fibonacci(n);
    resultElement.textContent = `Result: ${fibNumber}`;
  }
}
