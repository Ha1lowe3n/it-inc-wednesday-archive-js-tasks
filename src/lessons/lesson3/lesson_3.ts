console.log("lesson 3");

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU

// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661

const prom = new Promise((res, rej) => {
    let b = 10;
    // some code
    // ...
    // some async code
    setTimeout(() => {}, 0);
    // res(1); // success responce
    rej("oneArg"); // unsuccess responce
});
// prom.then(
//     (res) => {
//         console.log("then res ", res);
//         return res;
//     },
//     (err) => {
//         console.log(err);
//         throw new Error(err);
//         return "Success";
//     }
// ).then(
//     (res2) => {
//         console.log("then res2 ", res2);
//     },
//     (err) => {
//         console.log(err);
//     }
// );
prom.then((res) => {
    console.log("then res ", res);
    return res;
})
    .then((res2) => {
        console.log("then res2 ", res2);
    })
    .catch((err) => {
        console.log(err);
    });

// just a plug
export default () => {};
