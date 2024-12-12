function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

function calculate(a, b, operation) {
  try {
    switch (operation) {
      case '+':
        return add(a, b);
      case '-':
        return subtract(a, b);
      case '*':
        return multiply(a, b);
      case '/':
        return divide(a, b);
      default:
        throw new Error('Invalid operation');
    }
  } catch (error) {
    console.error('Error during calculation:', error.message);
    return null; // Or handle the error as appropriate
  }
}

// Example of the bug fixed
console.log(calculate(10, 0, '/')); // Now handles the error gracefully
console.log(calculate(10,2,'+')); // works fine
console.log(calculate(10,2,'-')); // works fine
console.log(calculate(10,2,'*')); // works fine