"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4*a*c;

  if (d < 0){
    // Пустой массив
  } else if (d === 0){
    let root0 = -b/(2*a);
    arr.push(root0);
  } else if (d > 0){
    let root1 = (-b + Math.sqrt(d) )/(2*a);
    let root2 = (-b - Math.sqrt(d) )/(2*a);
    arr.push(root1, root2);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentMonth = (percent / 12) / 100;
  let creditBody = amount - contribution;
  let paymentMonth = creditBody * (percentMonth + (percentMonth / ((Math.pow((1 + percentMonth), countMonths)) - 1)));
  let totalMortgage = paymentMonth * countMonths;

  totalMortgage = Number(totalMortgage.toFixed(2));
  return totalMortgage;
}