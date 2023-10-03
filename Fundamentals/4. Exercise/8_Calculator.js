function calculator (num1, operation, num2){
problem = 0;
let a = Number (num1);
let b = Number (num2);
    switch (operation){
    case '+':
        problem = a + b;
        break;
    case '-':
        problem = a - b;
        break;
    case '*':
        problem = a * b;
        break;
    case '/':
        problem = a / b;
        break;
 }
 console.log(problem.toFixed(2));
}
calculator ('5','+','10');
calculator ('25.5','-','3')