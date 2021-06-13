console.log("lesson 2");

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0

// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

const sum = (a: number) => (b: number) => {
    return a + b;
};
console.log(sum(3)(6));

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

const makeCounter = () => {
    let a = 0;
    return () => {
        return ++a;
    };
};

const counter = makeCounter();
console.log(counter());
console.log(counter());

const counter2 = makeCounter();
console.log(counter2());
console.log(counter());

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

const makeCounterTask3 = (count: number) => {
    return {
        increase: () => ++count,
        decrease: () => --count,
        reset: () => (count = 0),
        set: (n: number) => (count = n),
    };
};

const increaseCounter = makeCounterTask3(1).increase();
const decreaseCounter = makeCounterTask3(1).decrease();
const resetCounter = makeCounterTask3(1).reset();
const setCounter = makeCounterTask3(1).set(5);

console.log(increaseCounter);
console.log(decreaseCounter);
console.log(resetCounter);
console.log(setCounter);

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// const superSum = (a1: number) => (
//     a2: number,
//     b2: number = 0,
//     c2: number = 0
// ) => (a3: number = 0, b3: number = 0) => (a4: number = 0) => {
//     return a1 + a2 + b2 + c2 + a3 + b3 + a4;
// };

const superSum = (num: number) => {
    if (num <= 0) return 0;
    if (num === 1) return (n: number) => n;

    let _arguments: number[] = [];

    const helper = (...args: number[]) => {
        _arguments = [..._arguments, ...args];
        if (_arguments.length >= num) {
            _arguments.length = num;
            return _arguments.reduce((acc, number) => acc + number);
        } else {
            return helper;
        }
    };

    return helper;
};

// @ts-ignore
console.log(superSum(0));
// @ts-ignore
console.log(superSum(1)(5));
// @ts-ignore
console.log(superSum(3)(2)(5)(3));
// @ts-ignore
console.log(superSum(3)(2)(5, 3));
// @ts-ignore
console.log(superSum(3)(2, 5, 3));
// @ts-ignore
console.log(superSum(3)(2, 5)(3));
// @ts-ignore
console.log(superSum(3)(2, 5)(3, 9));

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

// ----- task 05.1 -----

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

// Сделайте три варианта решения:
// С использованием цикла.
// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// С использованием формулы арифметической прогрессии.

// цикл
// const sumTo = (n: number) => {
//     let result = 0;
//     for (let i = n; i > 0; i--) {
//         result += i;
//     }
//     return result;
// };

// рекурсия
const sumTo = (n: number): number => {
    if (n === 1) return n;
    return n + sumTo(n - 1);
};

console.log(sumTo(1));
console.log(sumTo(2));
console.log(sumTo(3));
console.log(sumTo(4));
console.log(sumTo(100));

// ---------------------

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

// just a plug
export default () => {};
