"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  const discriminant = (b ** 2 - (4 * a * c));
  if (discriminant > 0){
    arr.push((- b + Math.sqrt(discriminant)) / (2 * a))
    &&
    arr.push((- b - Math.sqrt(discriminant)) / (2 * a))
      console.log('Дискриминант равен ' + discriminant + '\nПервый крень уравнения равен ' + arr[0] + '\nВторой корень уравнения равен ' + arr[1]);
    } 
  
    else if (discriminant === 0){
      arr.push(-b / (2 * a)) 
      console.log('Дискриминант равен ' + discriminant + '\nКорень уравнения равен ' + arr[0])
    }
     else if (discriminant < 0){
       console.log('Дискриминант меньше нуля. \nКорней нет!');
    }
    return arr;
};

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    const monthlyPercent = (percent/12/100);
    const monthlyPayment = (amount - contribution) * (monthlyPercent * (Math.pow(1+monthlyPercent,countMonths)))/(Math.pow(1+monthlyPercent,countMonths)-1);
    const sumCredit = monthlyPayment * countMonths;
    return( + sumCredit.toFixed(2));
  }
  calculateTotalMortgage(10,1000,50000,12);
