function Mission1(intAraay) {
  const evenAraay = [];
  intAraay.forEach((num) => {
    if (num % 2 === 0) evenAraay.push(num);
  });
  return evenAraay;
}

function Mission2(str) {
  const myArray = str.split(" ");
  let count = 0;
  myArray.forEach((word) => {
    if (word.length == 4) count++;
  });
  return count;
}
function Mission3(arr) {
  // var arrToConvert = [[0,0,1],[2,3,3],[4,4,5]];
  const newArr = [];
  arr.forEach((row) => {
    row.forEach((element) => {
      newArr.push(element);
    });
  });
  return newArr;
}
function Mission6(int) {
  let a = 0,
    b = 1;
  for (let i = 2; i <= int; i++) {
    let next = a + b;
    a = b;
    b = next;
  }

  return int === 0 ? a : b;
}
module.exports = {
  Mission1,
  Mission2,
  Mission3,
  Mission6,
};
