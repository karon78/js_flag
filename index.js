"use strict";

/**
 * дан массив, нужно проверить, есть ли в нем элемент со значением 'c' или нет.
 * Если есть - вывести 'есть', если нет - вывести 'нет'.
 */

let flag = false
const array = ['a', 'b', 'c', 'd', 'e'];

for (let i = 0; i < array.length; ++i) {
    if (array[i] === 'c') {
        flag = true;
        break;
    }
}
alert(flag === true
      ? 'Есть'
      : 'Нет');

/**
 * необходимо создать функцию hasElem, которая параметром будет принимать массив и возвращать true,
 * если 'c' есть в массиве, и false - если нет
 */

function hasElem(array) {
    flag = false;
    for (let i = 0; i < array.length; ++i) {
        if (array[i] === 'c') {
            flag = true;
            break;
        }
    }
    alert(flag === true
          ? 'Есть'
          : 'Нет');

}

const arr1 = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['a', 'b', 'd', 'e', 'f'];

hasElem(arr1);
hasElem(arr2);


/**
 * Дан массив с числами. Проверьте, что в этом массиве есть число 5.
 * Если есть - выведите 'да', а если нет - выведите 'нет'.
 */
flag = false;

const arrayN = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < arrayN.length; ++i) {
    if (arrayN[i] === 5) {
        flag = true;
        break;
    }
}
alert(flag === true
      ? 'Есть'
      : 'Нет');

/**
 * Дано число, например 31. Проверьте, что это число не делится ни на одно другое
 * число кроме себя самого и единицы. То есть в нашем случае нужно проверить,
 * что число 31 не делится на все числа от 2 до 30.
 * Если число не делится - выведите 'false', а если делится - выведите 'true'.
 */

flag = false
const nam = 31;

for (let i = 2; i < nam - 1; ++i) {
    if (nam % i === 0) {
        flag = true;
        break;
    }
}
alert(flag === true
      ? 'Есть'
      : 'Нет');

/**
 * Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд.
 * Если есть - выведите 'да', а если нет - выведите 'нет'.
 */

flag = false
const arrayN1 = [1, 2, 3, 4, 5, 6, 7, 8, 8];

for (let i = 0; i < arrayN1.length-1; ++i) {
    if (arrayN1[i] === arrayN1[i+1]) {
        flag = true;
        break;
    }
}
alert(flag === true
      ? 'Есть'
      : 'Нет');
