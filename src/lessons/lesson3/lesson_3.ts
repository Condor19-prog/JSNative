console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/
//
// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661

// just a plug
export default () => {}


// let prom = new Promise<number>((res, rej) => {
//   res(5);
//   // rej(0);
// });
//
// console.log('Promise: ', prom);
// --------------------------------------------------------------
// prom.then((res) => {
//     console.log('resolve', res);
//     return res + 5;
//   },
//   (rej) => {
//     console.log('project', rej);
//     // throw -1;
//     return rej + 2;
//   })
//   .then((res2) => {
//     console.log('then2', res2);
//   }, (rej2) => {
//     console.log('rej2', rej2);
//   });
// --------------------------------------------------------------
// prom.then((res) => {
//   console.log('resolve', res);
//   return res + 5;
// })
//   .catch((rej) => {
//     console.log('project', rej);
//     return rej + 2;
//   })
//   .then((res2) => {
//     console.log('then2', res2);
//   })
//   .catch((rej2) => {
//     console.log('rej2', rej2);
//   })
// --------------------------------------------------------------
//
// prom.then((res) => {
//   console.log('resolve', res);
//   //throw -1
//   return res + 5;
// })
//   .then((res2) => {
//     console.log('then2', res2);
//     return res2;
//   })
//   //@ts-ignore
//   .finally((a: any) => {
//     console.log('finally', a);
//   })
//   //@ts-ignore
//   .then((res3) => {
//     console.log('then3', res3);
//     return res3;
//   })
//   //@ts-ignore
//   .catch((rej) => {
//     console.log('rej', rej);
//   });
