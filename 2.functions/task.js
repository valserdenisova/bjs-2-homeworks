// Задача 1

function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  if (arr.length === 0) return 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }
  let average = sum / arr.length;
  let avg = Number(average.toFixed(2));
  return { min: min, max: max, avg: avg };
}

// Задача 2

function summElementsWorker(...arr) {
  let summ = 0;
  if (arr.length === 0) return 0;

  for (let i =0; i < arr.length; i++) {
    summ += arr[i];
  }
  return summ;
}

function differenceMaxMinWorker(...arr) {
    let min = Infinity;
    let max = -Infinity;
    let sum = 0;
    if (arr.length === 0) return 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
          min = arr[i];
        }
        if (arr[i] > max) {
          max = arr[i];
        }
      }
    let difference = max - min;
    return difference;
}

function differenceEvenOddWorker(...arr) {
    let sumEvenElement = 0;
    let sumOddElement = 0;
    if (arr.length === 0) return 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sumEvenElement += arr[i];
        } else {
            sumOddElement += arr[i];
        }
    }
    let dif = sumEvenElement - sumOddElement;
    return dif;
}

function averageEvenElementsWorker(...arr) {
    let sumEvenElement = 0;
    let countEvenElement = 0;
    if (arr.length === 0) return 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sumEvenElement += arr[i];
            countEvenElement++;
        }
    }
    let average = sumEvenElement / countEvenElement;
    return average;
}

// Задача 3

function makeWork (arrOfArr, func) {
    let maxWorkerResult = -Infinity;
    let elements;
    let result;
    if (arrOfArr.length === 0) return 0;

    for (let i = 0; i < arrOfArr.length; i++) {
        elements = arrOfArr[i];
        result = func(...elements);
        if (result > maxWorkerResult) maxWorkerResult = result;
    }
    return maxWorkerResult;
}
